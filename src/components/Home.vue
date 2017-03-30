<template lang="pug">
    .home
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
        > .articles {
            display: flex;
            margin: auto;
            width: 1040px;
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
