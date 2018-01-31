{% extends 'layouts/vote.volt' %}
{% block content %}

<div class="detail background">
    <h1>{{ candidate.name }}</h1>
    {#x-oss-process=image/resize,w_500/auto-orient,1#}
    {% if candidate.head_img_url != null %}
    <img style="margin: 0 auto" src="{{ candidate.head_img_url }}?x-oss-process=image/resize,w_500/auto-orient,1" alt="{{ candidate.name }}">
    {% endif %}
    <p>{{ candidate.description }}</p>
</div>
<div>
    <button
            class="btn btn-danger dotoupiao background docss"
            rel="{{ candidate.cid }}"
            rel3="{{ candidate.number_id }}号 {{ candidate.name }}"
            rel1="{{ candidate.number_id }}">我要投票</button>
    <p style="text-align: center;" class='fontcolor'>票数:<span class='piao'>{{ candidate.vote_count + candidate.plus_vote }}</span></p>
</div>
<div id='dd'></div>

<script>
    var log = 1;
    var is_load = 0;
    var userid = '{{ candidate.cid }}';
    $(function () {
        $('#share-shadow').on('click', function () {
            $('body').css('overflow', 'scroll');
            $('#share-shadow').hide();
        });
        $(document).scroll(function() {
            var s = $(document).scrollTop();
            if(s > 100) {
                if(is_load === 0) {
                    is_load = 1;
                    if(log === 1) {
                        loadLog();
                    }
                }
            }
        })
    });
    function loadLog() {
        $('#votelog').show();
        var html = "<div style='font-size:12px;text-align:center;'>加载中...</div>";
        $('#shows').html(html);
        $.post(U('show_vote_log'), {
            userid:userid
        }, function(html) {
            $('#shows').html(html);
        });
    }
</script>
<div id='votelog' style='display:none'>
    <hr>
    <div id = 'shows'>

    </div>
</div>
{% endblock %}