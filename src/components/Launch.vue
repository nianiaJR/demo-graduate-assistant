<template lang="pug">
    .launch
        .slide-wrap
            rd-swipe(:swipe="swipe")
                .rd-swipe-item(:style="{'background-image': `url(${img.url})`}" v-for="(img, index) in imgs")
            h1 {{imgs[swipe.activeIndex].desc}}
        .intro
            h2 HOW IT WORKS
            ul
                li
                    img(src="../assets/profileicon.png")
                    h3 SHOWCASE
                    p Create an online presence by 
                    p profiling your activities, skills and
                    p achievements
                li
                    img(src="../assets/exploreicon.png")
                    h3 SEARCH
                    p Fit your best fit universities based
                    p on your personal interest and
                    p preference
                li
                    img(src="../assets/connecticon.png")
                    h3 CONNECT
                    p See your schools through the eyes of
                    p admission officers, professors and current
                    p students. Interact with them through news
                    p updates, live webinar and Q&A sessions.
            .login
                .wrap
                    h3 Login
                    input(type="text" placeholder="Username")
                    input(type="text" placeholder="Password")
                    a(href="#/sign") ENTER
                    p or Sign Up for FREE
        ul.contact
            li
                h3 ABOUT US
                img.logo(src="../assets/logo2.png" width="100" height="100")
                p
                    span Canvas Education is the first
                    br
                    span holistic education platform that
                    br
                    span connects Students in Asia to
                    br
                    span Universities overseas.
            li.contact
                h3 CONTACT US
                .wrap
                    dl
                        dt
                            icon(name="map-marker")
                        dd
                            p 185 Nanjing Xi Lu, Jing’an
                            p Qu, Shanghai, China 20000
                    dl
                        dt
                            icon(name="envelope-o")
                        dd
                            p info@canvas.org
                    dl
                        dt
                            icon(name="phone")
                        dd
                            p (+86) 323 555 1111
            li.follow
                h3 FOLLOW US
                img.qrcode(src="../assets/qrcode.jpg" width="120" height="120")
</template>

<script>
import rdSwipe from 'vue-slide'
export default {
    components: {
        'rd-swipe': rdSwipe
    },
    data () {
        return {
            swipe: {
                activeIndex: 0
            },
            imgs: [
                {
                    desc: 'EXPLORE YOUR OPTIONS',
                    url: require('../assets/road.jpeg')
                },
                {
                    desc: 'TELL YOUR STORY',
                    url: require('../assets/mic.jpg')
                },
                {
                    desc: 'ENGAGE WITH YOUR SCHOOL',
                    url: require('../assets/university.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="less">
.launch {
    background-color: #fff;
    > .slide-wrap {
        position: relative;
        > .rd-swipe {
            width: 100%;
            > .rd-swipe-pagination {
                > .rd-swipe-pagination-item {
                    background: #aaa;
                    &.active {
                        background: #fff;
                    }
                }
            }
        } 
        > h1 {
            position: absolute;
            width: 100%;
            color: #fff;
            text-align: center;
            z-index: 10;
            bottom: 40px;
        }
    }

    >.intro {
        padding: 30px 0;
        > h2 {
            margin-bottom: 20px;
            text-align: center;
        }
        > ul {
            display: flex;
            justify-content: center;
            list-style: none;
            > li {
                padding: 0 8%;
                width: 16%;
                text-align: center;
                > img {
                    width: 88%;
                }
                > h3 {
                    margin-top: 10px;
                    text-align: center;
                    font-size: 20px;
                }
                > p {
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
        > .login {
            margin-top: 3%;
            text-align: center;
            > .wrap {
                position: relative;
                margin: auto;
                padding: 30px 0;
                width: 910px;
                height: 460px;
                background: url('../assets/login.jpeg') no-repeat center center;
                background-size: cover;
                > h3 {
                    color: #fff;
                    font-size: 300%;
                }
                > input, > a {
                    display: block;
                    margin: 20px auto;
                    width: 85%;
                    height: 40px;
                    text-align: center;
                    font-size: 200%;

                }
                > a {
                    background-color: #cdace5;
                    color: #fff;
                }

                ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
                    color: #a568d0;
                }
                :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                   color: #a568d0;
                }
                ::-moz-placeholder { /* Mozilla Firefox 19+ */
                   color: #a568d0;
                }
                :-ms-input-placeholder { /* Internet Explorer 10-11 */
                   color: #a568d0;
                }

                > p {
                    position: absolute;
                    bottom: 40px;
                    width: 100%;
                    color: #fff;
                    font-size: 350%;
                }
            }
        }
    }

    > .contact {
        display: flex;
        background: #edeff2;
        padding: 5%;
        list-style: none;
        > li {
            flex: 2;
            > h3 {
                margin-bottom: 15px;
                font-size: 30px;
            }
            > p {
                font-size: 18px;
            }
        }
        > .contact {
            > .wrap {
                > dl {
                    display: flex;
                    align-items: center;
                    padding: 10px 0;
                    width: 75%;
                    border-bottom: 1px solid #9f9fa0;
                    > dt {
                        width: 42px;
                        height: 42px;
                        padding: 0 10px;
                        > .fa-icon {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    > dd {
                        flex: 1;
                        > p {
                            font-size: 18px;
                        }
                    }
                }
            }
        }
        > .follow {
            flex: 1;
            > img {
                margin: 5px;
            }
        }
    }
}
</style>
