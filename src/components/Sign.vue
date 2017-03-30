<template lang="pug">
    .sign
        .widget
            form
                .input-group
                    span First Name:
                    input(type="text")
                .input-group
                    span Last Name:
                    input(type="text")
                .input-group
                    span School
                    input(type="text")
                .input-group
                    span Graduate Year
                    .select-wrap
                        select(value="")
                            option(value="1") 2017
                            option(value="2") 2018
                            option(value="3") 2019
                            option(value="4") 2020
                        icon(name="angle-down")
                .input-group
                    span Email
                    input(type="email")
                .input-group
                    span Password
                    input(type="password")
                p
                    span By click Join Now, you agree to Canvas'&nbsp;
                    a(href="") User Agreement
                    span ,&nbsp;

                    a(href="") Privacy Policy&nbsp;

                    span and&nbsp;

                    a(href="") Cookie Policy
                a.join(href="#/home", @click="sign") Join Canvas
                hr
                p
                    span Already on Canvas?&nbsp;
                    a(href="#/home" @click="sign") Sign in
            .contact
                .title
                    p
                        span Or use your Wechat account to
                        br
                        span sign up for Canvas
                    img(src="../assets/wechat.png" width="72" height="72")
                .qrcode
                    img(src="../assets/qrcode.jpg" width="250" height="250")
</template>
<style lang="less">
    html, body, #app {
        height: 100%;
    }
    .sign {
        background: url('../assets/sign.jpeg') center no-repeat;
        background-size: cover;
        display: flex;
        height: 100%;
        align-items: center;
        justify-content: center;
        > .widget {
            display: flex;
            padding: 80px 0 20px 0px;
            width: 80%;
            opacity: 0.8;
            background: #ccc;
            > form {
                flex: 1;
                margin: 0px 100px 0px 50px;
                > .input-group {
                    display: flex;
                    margin: 10px 0px;
                    > span {
                        width: 180px;
                        font-size: 20px;
                        font-weight: bolder;
                    }
                    > input, > .select-wrap {
                        flex: 1;
                        border: 2px solid #000;
                    }
                    > input, select {
                        padding: 5px;
                    }

                    > .select-wrap {
                        display: flex;
                        > select {
                            flex: 1;
                            height: 100%;
                            border-radius: 0 !important;
                            -webkit-appearance: none;
                            -webkit-border-radius: 0px;
                        }
                        .fa-icon {
                            width: 20px;
                            height: 27px;
                        }
                    }
                }
                > p {
                    line-height: 15px;
                    font-size: 14px;
                }
                > p:last-child {
                    font-weight: bolder;
                }
                >.join {
                    display: block;
                    margin: 15px 0px;
                    width: 200px;
                    height: 40px;
                    text-align: center;
                    line-height: 40px;
                    border-radius: 5px;
                    background: #702f9e;
                    font-size: 25px;
                    color: #fff;
                    text-decoration: none;
                }
                > hr {
                    margin-bottom: 15px;
                }
            }
            > .contact {
                flex: 1;
                padding: 0 50px 0 50px;
                border-left: 1px solid #000;
                > .title {
                    display: flex;
                    align-items: center;
                    > img {
                        width: 72px;
                    }
                    > p {
                        flex: 1;
                        font-size: 20px;
                    }
                }
                > .qrcode {
                    text-align: center;
                }
            }
        }
    }
</style>
<script>
import Bus from '../lib/bus.js'
export default {
    methods: {
        sign () {
            Bus.$emit('login')
        }
    }
}
</script>
