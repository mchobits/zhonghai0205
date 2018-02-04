<!DOCTYPE html>
<html>


<!-- Mirrored from www.zi-han.net/theme/hplus/contacts.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jan 2016 14:18:21 GMT -->
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>测试者</title>

    <link rel="shortcut icon" href="favicon.ico">
    <link href="css/bootstrap.min14ed.css?v=3.3.6" rel="stylesheet">
    <link href="css/font-awesome.min93e3.css?v=4.4.0" rel="stylesheet">

    <link href="css/animate.min.css" rel="stylesheet">
    <link href="css/style.min862f.css?v=4.1.0" rel="stylesheet">

</head>

<body class="gray-bg">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <?php foreach ($members as $member) { ?>
            <div class="col-sm-4">
                <div class="contact-box">
                    <a class="J_menuItem" href="profile?mid=<?= $member->id ?>">
                        <div class="col-sm-4">
                            <div class="text-center">
                                <img alt="image" class="img-circle m-t-xs img-responsive" src="<?= $member->avatar ?>">
                                <?php if ($member->sex == 1) { ?>
                                    <div class="m-t-xs font-bold">男性</div>
                                <?php } elseif ($member->sex == 2) { ?>
                                    <div class="m-t-xs font-bold">女性</div>
                                <?php } else { ?>
                                    <div class="m-t-xs font-bold">未知性别</div>
                                <?php } ?>

                            </div>
                        </div>
                        <div class="col-sm-8">
                            <?php if ($member->real_name == '') { ?>
                                <h3><strong><?= $member->nickname ?></strong></h3>
                            <?php } else { ?>
                                <h3><strong><?= $member->real_name ?></strong></h3>
                            <?php } ?>
                            <p><i class="fa fa-map-marker"></i> <?= $member->province ?>·<?= $member->city ?></p>
                            <p>分数：<?= $member->result_point ?></p>
                            <p>年龄：<?= $member->age ?></p>
                            <address>是否养宠:<br><?= $member->has_pet ?>
                                <br>
                            <abbr title="Phone">Tel:</abbr> <?= $member->mobile ?>
                        </address>
                        </div>
                        <div class="clearfix"></div>
                    </a>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
    <script src="js/jquery.min.js?v=2.1.4"></script>
    <script src="js/bootstrap.min.js?v=3.3.6"></script>
    <script src="js/content.min.js?v=1.0.0"></script>
    <script>
        $(document).ready(function(){$(".contact-box").each(function(){animationHover(this,"pulse")})});
    </script>
    <script type="text/javascript" src="http://tajs.qq.com/stats?sId=9051096" charset="UTF-8"></script>
</body>


<!-- Mirrored from www.zi-han.net/theme/hplus/contacts.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 20 Jan 2016 14:18:21 GMT -->
</html>
