{#{% extends 'layouts/vote.volt' %}#}
{#{% block content %}#}
{#{% endblock %}#}

{% for index, candidate in res %}
    <tr>
        <td>第{{ index + 1 }}名</td>
        <td>{{ candidate.name }}:{{ candidate.company }}</td>
        <td>{{ candidate.description }}</td>
    </tr>
{% endfor %}