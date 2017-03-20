<template lang="pug">
    .home
        ul
            li
                a(href="#/home") Home
            li
                a(href="") Profile
            li
                a(href="") My Universities
            li
                a(href="") Events
            li
                a(href="") More
        .articles
            .frames.left
                h3 Following
                ul
                    li(v-for="(config, index) in configs", v-if="index%2==0")
                        card(:config="config")
            .frames.right
                h3 Trending
                ul
                    li(v-for="(config, index) in configs", v-if="index%2==1")
                        card(:config="config")

</template>
<style lang="less">
    .home {
        background: #f2f2f2;
        > ul {
            display: flex;
            list-style: none;
            background: #9ec2e5;
            > li {
                padding: 10px 0px;
                font-size: 25px;
                font-family: monospace;
                > a {
                    padding: 0px 10px;
                    display: inline-block;
                    color: #fff;
                    text-decoration: none;
                    border-left: 2px solid #9ec2e5;
                }
                &:hover {
                    background: #0c6fbe;
                    > a {
                        border-left: 2px solid #0c6fbe;
                    }
                }
            }
            > li + li {
                > a {
                    border-left: 2px solid #fff;
                }
            }
        }

        > .articles {
            display: flex;
            margin: 30px 10%;
            background: #f2f2f2;  
            > .frames {
                flex: 1;
                > h3 {
                    padding: 10px;
                    background: #a568d0;
                    text-align: center;
                    font-size: 40px;
                    font-weight: bolder;
                    font-style: monospace;
                    color: #fff;
                }
                > ul > li {
                    margin: 10px 0px;
                    background: #fff;
                    &:first-child {
                        margin-top: 0px;
                    }
                }
            }
            > .right {
                > h3 {
                    border-left: 1px solid #fff;
                }
                > ul {
                    padding-top: 30px;
                    padding-left: 30px;
                    border-left: 1px solid #a6a6a6;
                }
            }
            > .left {
                > ul {
                    padding-top: 50px;
                    margin-right: 20px;
                }
            }
        }
    }
</style>
<script>
    import Card from './Card'
    import CardConfigs from '../config/cards.js'
    export default {
        data () {
            return {
                configs: CardConfigs
            }
        },
        components: {
            card: Card
        }
    }
</script>
