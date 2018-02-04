<!DOCTYPE html>
<html>


<!-- Mirrored from www.zi-han.net/theme/hplus/profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jan 2016 14:17:47 GMT -->
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">


    <title>H+ 后台主题UI框架 - 个人资料</title>

    <link rel="shortcut icon" href="favicon.ico"> <link href="css/bootstrap.min14ed.css?v=3.3.6" rel="stylesheet">
    <link href="css/font-awesome.min93e3.css?v=4.4.0" rel="stylesheet">
    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/style.min862f.css?v=4.1.0" rel="stylesheet">

</head>

<body class="gray-bg">
    <div class="wrapper wrapper-content">
        <div class="row animated fadeInRight">
            <div class="col-sm-4">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>个人资料</h5>
                    </div>
                    <div>
                        <div class="ibox-content no-padding border-left-right">
                            <img alt="image" class="img-responsive" src="{{ member.avatar }}">
                        </div>
                        <div class="ibox-content profile-content">
                            {% if member.real_name == '' %}
                                <h4><strong>{{ member.nickname }}</strong></h4>
                            {% else %}
                                <h4><strong>{{ member.real_name }}</strong></h4>
                            {% endif %}
                            <p><i class="fa fa-map-marker"></i> {{ member.province }}·{{ member.city }}</p>
                            <p>分数：{{ member.result_point }}</p>
                            <p>年龄：{{ member.age }}</p>
                            <h5>养宠: {{ member.has_pet }}</h5>
                            <h5>与爱宠之间的故事</h5>
                            <p>
                                {{ member.pet_story }}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>想与谁匹配</h5>

                    </div>
                    <div class="ibox-content">

                        <div>
                            <div class="feed-activity-list">

                                {% if want_lover %}
                                    <div class="feed-element">
                                        <a href="profile?mid={{ want_lover.id }}" class=" J_menuItem pull-left">
                                            <img alt="image" class="feed-photo" src="{{ want_lover.avatar }}">
                                        </a>
                                        <div class="media-body ">
                                            想与 <strong>{{ want_lover.real_name }} (分数：{{ want_lover.result_point }} | 年龄：{{ want_lover.age }}岁)</strong> 匹配.
                                            <br>
                                        </div>
                                    </div>
                                {% endif %}
                            </div>

                        </div>

                    </div>
                </div>
                <div class="ibox float-e-margins">
                    <div class="ibox-title">
                        <h5>最新动态</h5>

                    </div>
                    <div class="ibox-content">

                        <div>
                            <div class="feed-activity-list">

                                {% for lover in lovers %}
                                <div class="feed-element">
                                    <a href="profile?mid={{ lover.id }}" class="J_menuItem pull-left">
                                        <img alt="image" class="feed-photo" src="{{ lover.avatar }}">
                                    </a>
                                    <div class="media-body ">
                                       被 <strong>{{ lover.real_name }} (分数：{{ lover.result_point }} | 年龄：{{ lover.age }}岁)</strong> 匹配了.
                                        <br>
                                    </div>
                                </div>
                                {% endfor %}
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    </div>
    <script src="js/jquery.min.js?v=2.1.4"></script>
    <script src="js/bootstrap.min.js?v=3.3.6"></script>
    <script src="js/content.min.js?v=1.0.0"></script>
    <script src="js/plugins/peity/jquery.peity.min.js"></script>
    <script src="js/demo/peity-demo.min.js"></script>
    <script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="UTF-8"></script>

</body>


<!-- Mirrored from www.zi-han.net/theme/hplus/profile.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jan 2016 14:18:21 GMT -->
</html>
