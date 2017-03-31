<template lang="pug">
    .card
        h3
            a(:href="config.link", target="_blank") {{config.title}}
        img(:src="config.image")
        ul
            li(v-for="tag in config.tags") {{tag}}

        ul.comment
            li.like
                icon(name="thumbs-up")
                span Like
            li.comment
                icon(name="comment")
                span Comment
            li.share
                icon(name="share")
                span Share
        button(v-if="more") More Articles
</template>
<style lang="less">
    .card {
        > h3 {
            margin-bottom: 10px;
            > a {
                margin: 5px;
                text-decoration: none;
                color: #000;
                font-size: 35px;
                font-weight: bolder;
                &:hover {
                    border-bottom: 1px solid #000;
                }
            }
        }
        > img {
            width: 100%;
        }
        > ul {
            display: flex;
            > li {
                flex: 1;
                padding: 10px;
                text-align: center;
                font-size: 20px;
                font-weight: bolder;
            }
        }
        > .comment {
            > li {
                color: #455ca1;
                cursor: pointer;
                .fa-icon {
                    margin-right: 5px;
                }
                &:hover, &:focus {
                    color: #de4c4c;
                }
            }
        }
        > button {
            padding: 10px;
            width: 100%;
            border: none;
            font-weight: bolder;
            font-size: 16px;
            background: #d9d9d9;
            cursor: pointer;
            &:hover, &:focus {
                background: #aaa;
                outline: none;
            }
        }
    }
</style>
<script>
    export default {
        props: ['config', 'more']
    }
</script>
