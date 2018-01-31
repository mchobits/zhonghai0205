<div class="vote-list wd-per-90">
    <div style='text-align:center;'><h5>投票记录</h5></div>
    <table class="layui-table">
        <colgroup>
            <col width="10">
            <col width="10">
            <col width="80">
            <col width="10">
        </colgroup>
        <thead>
        <tr>
            <td>地区</td>
            <td>头像</td>
            <td>昵称</td>
            <td>投票时间</td>
        </tr>
        </thead>
        <tbody>

        {% for vlog in vlogs %}
        <tr>
            <td>{{ vlog.city }}</td>
            <td>
                <img class="layui-circle" src="{{ vlog.head_img_url }}" >

            </td>
            <td>{{ vlog.nickname }}</td>
            <td>{{ date('m-d H:i:s', vlog.create_time) }}</td>
        </tr>
        {% endfor %}
        </tbody>
    </table>
    <div class='zhushi' style='text-align:center;width:100%'>仅显示当天最新的15位用户</div>
</div>
