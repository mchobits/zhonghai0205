<?php
/**
 * Created by PhpStorm.
 * User: akari
 * Date: 2018/02/06
 * Time: 11:19
 */

// $str = "http://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83epbp8TG8g2E46Y3RZ3H7lnH0ibia26crdjt3Hdgsoy4jsCCmIXgqic2j3HYgZ2t6icTCPOjfU96u3vryw/132";
// echo strlen($str). "\n";
// echo strripos($str, "/", 0) + 1 ."\n";

// (strripos($str, "/", 0) + 1);
// echo substr($str, 0, (strripos($str, "/", 0) + 1))."0";


function imagecropper($source_path, $target_width, $target_height)
{
    $source_info = getimagesize($source_path);
    $source_width = $source_info[0];
    $source_height = $source_info[1];
    $source_mime = $source_info['mime'];
    $source_ratio = $source_height / $source_width;
    $target_ratio = $target_height / $target_width;

// 源图过高
    if ($source_ratio > $target_ratio) {
        $cropped_width = $source_width;
        $cropped_height = $source_width * $target_ratio;
        $source_x = 0;
        $source_y = ($source_height - $cropped_height) / 2;
    } // 源图过宽
    elseif ($source_ratio < $target_ratio) {
        $cropped_width = $source_height / $target_ratio;
        $cropped_height = $source_height;
        $source_x = ($source_width - $cropped_width) / 2;
        $source_y = 0;
    } // 源图适中
    else {
        $cropped_width = $source_width;
        $cropped_height = $source_height;
        $source_x = 0;
        $source_y = 0;
    }

    switch ($source_mime) {
        case 'image/gif':
            $source_image = imagecreatefromgif($source_path);
            break;

        case 'image/jpeg':
            $source_image = imagecreatefromjpeg($source_path);
            break;

        case 'image/png':
            $source_image = imagecreatefrompng($source_path);
            break;

        default:
            return false;
            break;
    }

    $target_image = imagecreatetruecolor($target_width, $target_height);
    $cropped_image = imagecreatetruecolor($cropped_width, $cropped_height);

// 裁剪
    imagecopy($cropped_image, $source_image, 0, 0, $source_x, $source_y, $cropped_width, $cropped_height);
// 缩放
    imagecopyresampled($target_image, $cropped_image, 0, 0, 0, 0, $target_width, $target_height, $cropped_width, $cropped_height);

//保存图片到本地(两者选一)
$randNumber = mt_rand(00000, 99999). mt_rand(000, 999);
$fileName = substr(md5($randNumber), 8, 16) .".png";
imagepng($target_image,'./'.$fileName);
imagedestroy($target_image);

//直接在浏览器输出图片(两者选一)
//    header('Content-Type: image/jpeg');
//    imagepng($target_image);
//    imagedestroy($target_image);
//    imagejpeg($target_image);
//    imagedestroy($source_image);
//    imagedestroy($target_image);
//    imagedestroy($cropped_image);
}

function getCircleAvatar($avatar, $circleAvatar, $r)
{
    /**
     * @des     画一个正方形
     * @size    两个半径
     */
    $size = 2 * $r;
    $circle = new Imagick();
    $circle->newImage($size, $size, 'none');
    $circle->setimageformat('png');
    $circle->setimagematte(true);

    /**
     * @des     在矩形上画一个白色圆
     */
    $draw = new ImagickDraw();
    $draw->setfillcolor('#fff');
    $draw->circle($r, $r, $r, $size);
    $circle->drawimage($draw);

    /**
     * @des     裁剪头像成圆形
     */
    $imagick = new Imagick();
    $imagick->readImage($avatar);
    $imagick->setImageFormat('png');
    $imagick->setimagematte(true);
    $imagick->cropimage($size, $size, 30, 0); // 修改裁剪属性
    $imagick->compositeimage($circle, Imagick::COMPOSITE_COPYOPACITY, 0, 0);
    $imagick->writeImage($circleAvatar);
    $imagick->destroy();
}

class image_blur
{
    /**
     * 图片高斯模糊（适用于png/jpg/gif格式）
     * @param $srcImg 原图片
     * @param $savepath 保存路径
     * @param $savename 保存名字
     * @param $positon 模糊程度
     *
     *基于Martijn Frazer代码的扩充， 感谢 Martijn Frazer
     */
    public function gaussian_blur($srcImg, $savepath = null, $savename = null, $blurFactor = 3)
    {
        $gdImageResource = $this->image_create_from_ext($srcImg);
        $srcImgObj = $this->blur($gdImageResource, $blurFactor);
        $temp = pathinfo($srcImg);
        $name = $temp['basename'];
        $path = $temp['dirname'];
        $exte = $temp['extension'];
        $savename = $savename ? $savename : $name;
        $savepath = $savepath ? $savepath : $path;
        $savefile = $savepath . '/' . $savename;
        $srcinfo = @getimagesize($srcImg);
        switch ($srcinfo[2]) {
            case 1:
                imagegif($srcImgObj, $savefile);
                break;
            case 2:
                imagejpeg($srcImgObj, $savefile);
                break;
            case 3:
                imagepng($srcImgObj, $savefile);
                break;
            default:
                return '保存失败'; //保存失败
        }
        return $savefile;
        imagedestroy($srcImgObj);
    }

    /**
     * Strong Blur
     *
     * @param $gdImageResource
     * 图片资源
     * @param $blurFactor
     * 可选择的模糊程度
     * 可选择的模糊程度 0使用 3默认 超过5时 极其模糊
     * @return GD image 图片资源类型
     * @author Martijn Frazer, idea based on http://stackoverflow.com/a/20264482
     */
    private function blur($gdImageResource, $blurFactor = 3)
    {
        // blurFactor has to be an integer
        $blurFactor = round($blurFactor);
        $originalWidth = imagesx($gdImageResource);
        $originalHeight = imagesy($gdImageResource);
        $smallestWidth = ceil($originalWidth * pow(0.5, $blurFactor));
        $smallestHeight = ceil($originalHeight * pow(0.5, $blurFactor));
        // for the first run, the previous image is the original input
        $prevImage = $gdImageResource;
        $prevWidth = $originalWidth;
        $prevHeight = $originalHeight;
        // scale way down and gradually scale back up, blurring all the way
        for ($i = 0; $i < $blurFactor; $i += 1) {
            // determine dimensions of next image
            $nextWidth = $smallestWidth * pow(2, $i);
            $nextHeight = $smallestHeight * pow(2, $i);
            // resize previous image to next size
            $nextImage = imagecreatetruecolor($nextWidth, $nextHeight);
            imagecopyresized($nextImage, $prevImage, 0, 0, 0, 0,
                $nextWidth, $nextHeight, $prevWidth, $prevHeight);
            // apply blur filter
            imagefilter($nextImage, IMG_FILTER_GAUSSIAN_BLUR);
            // now the new image becomes the previous image for the next step
            $prevImage = $nextImage;
            $prevWidth = $nextWidth;
            $prevHeight = $nextHeight;
        }
        // scale back to original size and blur one more time
        imagecopyresized($gdImageResource, $nextImage,
            0, 0, 0, 0, $originalWidth, $originalHeight, $nextWidth, $nextHeight);
        imagefilter($gdImageResource, IMG_FILTER_GAUSSIAN_BLUR);
        // clean up
        imagedestroy($prevImage);
        // return result
        return $gdImageResource;
    }

    private function image_create_from_ext($imgfile)
    {
        $info = getimagesize($imgfile);
        $im = null;
        switch ($info[2]) {
            case 1:
                $im = imagecreatefromgif($imgfile);
                break;
            case 2:
                $im = imagecreatefromjpeg($imgfile);
                break;
            case 3:
                $im = imagecreatefrompng($imgfile);
                break;
        }
        return $im;
    }
}

//$image_blur = new image_blur();
//$image_blur->gaussian_blur("./0.jpg", null, "./0.blur.jpg", 3);
//
//getCircleAvatar("./0.jpg", "0_circle.png", 290);
imagecropper("0_circle.png", 200);