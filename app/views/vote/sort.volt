{% extends 'layouts/vote.volt' %}
{% block content %}
    <div class="rule-container" style="width:95%;">
        <h2 class='fontcolor border'style="width:100%;">"广东省最美养老护理员"网络投票排名</h2>

    </div>
    <table class="layui-table" style="width: 90%; margin-left: auto; margin-right: auto" lay-even>
        <thead>
        <tr>
            <th width='25%' class='fontcolor'><i class="layui-icon">&#xe600;</i> 排名</th>
            <th width='50%' class='fontcolor'><i class="layui-icon">&#xe60c;</i> 姓名</th>
            <th width='25%' class='fontcolor'><i class="layui-icon">&#xe630;</i> 票数</th>
        </tr>
        </thead>
        <tbody>
        {% for index, candidate in best_huliyuan_sort %}
            <tr>
                <td>第{{ index + 1 }}名</td>
                <td>{{ candidate.name }}</td>
                <td>{{ candidate.v_count }}</td>
            </tr>
        {% endfor %}

        </tbody>
    </table>

    <div class="rule-container" style="width:95%;">
        <h2 class='fontcolor border'style="width:100%;">"广东省优秀养老院院长"网络投票排名</h2>

    </div>
    <table class="layui-table" style="width: 90%; margin-left: auto; margin-right: auto" lay-even>
        <thead>
        <tr>
            <th width='25%' class='fontcolor'><i class="layui-icon">&#xe600;</i> 排名</th>
            <th width='50%' class='fontcolor'><i class="layui-icon">&#xe60c;</i> 姓名</th>
            <th width='25%' class='fontcolor'><i class="layui-icon">&#xe630;</i> 票数</th>
        </tr>
        </thead>
        <tbody>
        {% for index, candidate in best_yuanzhang_sort %}
            <tr>
                <td>第{{ index + 1 }}名</td>
                <td>{{ candidate.name }}</td>
                <td>{{ candidate.v_count }}</td>
                {#<td>{{ candidate.v_count }}</td>#}
            </tr>
        {% endfor %}
        </tbody>
    </table>

    <div class="rule-container" style="width:95%;">
        <h2 class='fontcolor border'style="width:100%;">"广东省最佳养老机构"网络投票排名</h2>

    </div>
    <table class="layui-table" style="width: 90%; margin-left: auto; margin-right: auto" lay-even>
        <thead>
        <tr>
            <th width='25%' class='fontcolor'><i class="layui-icon">&#xe600;</i> 排名</th>
            <th width='50%' class='fontcolor'><i class="layui-icon">&#xe60c;</i> 机构名</th>
            <th width='25%' class='fontcolor'><i class="layui-icon">&#xe630;</i> 票数</th>
        </tr>
        </thead>
        <tbody id='sort_user'>
        {% for index, candidate in best_jigou_sort %}
            <tr>
                <td>第{{ index + 1 }}名</td>
                <td>{{ candidate.name }}</td>
                <td>{{ candidate.v_count }}</td>
            </tr>
        {% endfor %}
        </tbody>
    </table>

<style>
    .layui-table td, .layui-table th {
        font-size:12px;
        text-align:center;
    }
</style>

{% endblock %}