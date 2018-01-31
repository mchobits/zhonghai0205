{% extends 'layouts/vote.volt' %}
{% block content %}

<div class="row competitor-list">
    {% for candidate in candidates %}
        <div class="competitor col-md-6">
            <span class="user-number">{{ candidate.number_id }}号</span>
            <a href="/detail?id={{ candidate.cid }}">
                <img class='lazy pimg' data-original="{{ candidate.head_img_url }}?x-oss-process=image/resize,w_300/auto-orient,1">
            </a>
            <div class="info background">
                {% if candidate.company != null %}
                    <p><i class="layui-icon">&#xe60c;</i> {{ candidate.name }}：{{ candidate.company }}</p>
                {% else %}
                    <p><i class="layui-icon">&#xe60c;</i> {{ candidate.name }} </p>
                {% endif %}
                <div class="info-bottom">
                    <button rel="{{ candidate.cid }}"
                            rel3="{{ candidate.number_id }}号 {{ candidate.name }}"
                            rel1="{{ candidate.number_id }}"
                            class="dotoupiao layui-btn layui-btn-primary layui-btn-small">
                        <i class="layui-icon" style="font-size: 1.4rem !important;">&#xe600;</i> 投票</button>
                    <p><span class='piao'>{{ candidate.v_count + candidate.plus_vote }}</span>票</p>
                </div>
            </div>
        </div>
    {% endfor  %}

</div>

    <div id="pages" style='text-align:center;'></div>
<script>

    var nowpage = {{ currPage }};
    layui.use(['laypage', 'layer'], function(){
        var laypage = layui.laypage;
        var layer = layui.layer;
        laypage({
            cont: 'pages',
            pages: {{ totalPage }},
            curr: nowpage,
            skin: '#e64e0e',
            first: false,
            last: false,
            prev:false,
            next:false,
            skip:false,
            groups:3,
            jump:function(obj, frist) {
                var curr = obj.curr;
                if(curr !== nowpage) {
                    var loca = window.location;
                    location.href = loca.origin + loca.pathname + '?pageNum=' + curr;
                }
            }
        });
    });

    $(function () {
        var $container = $('.competitor-list');
        $("img.lazy").lazyload({
            effect: "fadeIn",
            load:function(){

                $container.imagesLoaded(function() {
                    $container.masonry({
                        itemSelector: '.competitor',
                        gutter: 10,
                        isAnimated: false
                    });
                });
            }
        });
    });
</script>
{% endblock %}