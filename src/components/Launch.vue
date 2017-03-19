<template lang="pug">
    .launch
        rd-swipe(:swipe="swipe")
            .rd-swipe-item(:style="{'background-image': `url(${img.url})`}" v-for="(img, index) in imgs")
        .intro
            ul
                li
                    img(src="../assets/profileicon.png")
                    h3 SHOWCASE
                    p TextTextTex
                li
                    img(src="../assets/exploreicon.png")
                    h3 SEARCH
                    p TextTextTex
                li
                    img(src="../assets/connecticon.png")
                    h3 CONNECT
                    p TextTextTex
            .login
                .wrap
                    h3 Login
                    input(type="text" placeholder="Username")
                    input(type="text" placeholder="Password")
                    p or Sign Up for FREE
        ul.contact
            li
                h3 ABOUT US
                img.logo(src="../assets/logo.jpg" width="100" height="100")
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
                    desc: 'Explore your photos',
                    url: require('../assets/road.jpeg')
                },
                {
                    desc: 'Tell your story',
                    url: require('../assets/mic.jpg')
                },
                {
                    desc: 'Engage with your school',
                    url: require('../assets/university.jpg')
                }
            ]
        }
    }
}
</script>

<style lang="less">
.launch {
    font-family: monospace;
    > .rd-swipe {
        width: 100%;
    }
    >.intro {
        padding: 30px 0;
        > ul {
            display: flex;
            justify-content: center;
            list-style: none;
            > li {
                padding: 0 6%;
                width: 12%;
                > img {
                    width: 100%;
                }
                > h3 {
                    margin-top: 10px;
                    text-align: center;
                }
                > h3, > p {
                    font-weight: bolder;
                    font-size: 20px;
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
                width: 52%;
                height: 400px;
                background: url('../assets/login.jpeg') no-repeat center center;
                background-size: cover;
                > h3 {
                    color: #fff;
                    font-size: 300%;
                }
                > input {
                    display: block;
                    margin: 30px auto;
                    width: 85%;
                    height: 40px;
                    text-align: center;
                    font-size: 200%;

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
                    font-weight: bolder;
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
