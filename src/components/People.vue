<style lang="less" scoped>
    .dot:before {
        content: '';
        display: inline-block;
        position: relative;
        bottom: 2px;
        margin-right: 10px;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #000;
    }
    .people {
        background: #f2f2f2;
        > .wrap {
            margin: auto;
            padding: 20px 0px;
            width: 1000px;
            > .resume {
                display: flex;
                background: #fff;
                > img {
                    height: 210px;
                }
                > .desc {
                    flex: 1;
                    > h2 {
                        padding: 20px 10px;
                        font-size: 35px;
                        font-weight: bolder;
                    }
                    > h4 {
                        padding-left: 10px;
                        font-size: 16px;
                    }
                    > h4 + h4 {
                        margin-top: 5px;
                    }
                    > .contact {
                        display: flex;
                        margin-top: 45px;
                        color: #fff;
                        background: #8d77d8;
                        > p {
                            flex: 1;
                            padding: 10px;
                            &:last-child {
                                background: #432f88;
                            }
                            > .fa-icon {
                                margin-right: 10px;
                            }
                        }
                    }
                }
            }

            > ul {
                > li {
                    margin-top: 10px;
                    padding-bottom: 10px;
                    background: #fff;
                    box-shadow: 1px 1px 3px #aaa;
                    > h3 {
                        padding: 10px;
                        background: #ec7f3c;
                        color: #fff;
                        font-size: 20px;
                        font-weight: bolder;
                    }
                    p {
                        padding: 3px 10px;
                    }
                    > .goods {
                        display: flex;
                        > li {
                            flex: 1;
                            text-align: center;
                            > img {
                                height: 150px;
                            }
                            > p {
                                font-weight: bolder;
                            }
                            > .desc {
                                > span {
                                    display: inline-block;
                                    padding: 0 5px;
                                }
                                > span + span {
                                    border-left: 2px solid #5c5ebe;
                                }
                            }
                        }
                    }
                    > .see-more {
                        display: flex;
                        padding: 5px 0px;
                        justify-content: center;
                        align-items: center;
                        color: #fff;
                        background: #7f7f7f;
                        cursor: pointer;
                        > .fa-icon {
                            height: 25px;
                            width: 25px;
                        }
                    }
                }
                > .love {
                    > .desc {
                        background: #fff;
                        overflow: hidden;
                        > img {
                            float: left;
                            margin: 15px;
                        }
                        > h3 {
                            margin-top: 10px;
                        }
                    }
                    > p {
                        color: #8d9198;
                        cursor: pointer;
                        > span {
                            display: inline-block;
                            margin-left: 5px;
                        }
                        &:hover {
                            color: #000;
                        }
                    }
                    > input {
                        margin: 0 1%;
                        width: 98%;
                    }
                }
                > .activity {
                    > ul {
                        > li {
                            padding: 10px;
                            display: flex;
                            > .desc {
                                flex: 2;
                                > h4 {
                                    font-weight: bolder;
                                }
                                > .imgs {
                                    display: flex;
                                    > .img {
                                        flex: 1;
                                        font-size: 0px;
                                        > img {
                                            width: 100%;
                                            height: 200px;
                                        }
                                        > p {
                                            font-size: 16px;
                                            background: #4671c2;
                                            color: #fff;
                                        }
                                    }
                                    > .img + .img {
                                        margin-left: 10px;
                                    }
                                }
                            }
                            > .time {
                                flex: 1;
                                > p {
                                    display: flex;
                                    align-items: center;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template lang="pug">
    .people
        .wrap
            .resume
                img(src="../assets/girl.jpg")
                .desc
                    h2 Ling Li
                    h4 Shanghai I China
                    h4 Shanghai High School I Grade 10
                    .contact
                        p Canvas.com/s/ling-li
                        p
                          icon(name="envelope")
                          span Contact
            ul
                li
                    h3 MY STORY
                    p Hi! I am Ling from Shanghai. I love visual art and journalism! My dream is to empower Chinese youth to use art to express their individuality and their dream for society. Check out my profile!
                    ul.goods
                        li
                            img(src="../assets/skill.png")
                            p SKILLS
                            .desc
                                span Writing
                                span Event Curation
                                span Communication
                                span Teamwork
                                span Photography
                        li
                            img(src="../assets/passion.png")
                            p PASSIONS
                            .desc
                                span Art History
                                span Travelling
                        li
                            img(src="../assets/language.png")
                            p LANGUAGE(S)
                            .desc
                                span Mandarin
                                span English
                                span French
                li.activity
                    h3 MY ACTIVITIES
                    ul
                        li
                            .desc
                                h4 President, Shanghai High School Newspaper
                                p.dot Curated the print and online version of school’s monthly newspaper 
                                p.dot Managed a team of 7 students to develop content 
                                .imgs
                                    .img
                                        img(src="../assets/football.jpg")
                                        p New PE Teacher,New Sport for Girls
                                    .img
                                        img(src="../assets/conference.jpg")
                                        p Take Your Team Discussion Underwater

                            .time
                                h3 Jan 2016 - Present
                                p
                                    img(src="../assets/gold.png")
                                    span Endorsements
                        li
                            .desc
                                h4 Curation Manager, Ju Lu High School Annual Art Festival
                                p.dot Partnered with Disney Shanghai to promote storytelling among students
                                p.dot 500 students and 200 parents attended the event  
                                .imgs
                                    .img
                                        img(src="../assets/disney.jpg")
                                    .img
                                        img(src="../assets/disney2.jpg")
                            .time
                                h3 June 2016
                                p
                                    img(src="../assets/gold.png")
                                    span Endorsements
                    .see-more
                        span see more
                        icon(name="angle-down")
                li
                    h3 WHAT YOU SHOULD KNOW ABOUT ME
                    p.dot I am not good at math
                    p.dot Have a dream to publish a picture book about old Shanghai architectures and their stories
                    p.dot My parents want me to study economics in university but I am going to secretly change it to art history 
                    p.dot I have two fat cats whom I wish I could to university (just like how Hogwarts allow pets)
                    .see-more
                        span see more
                        icon(name="angle-down")
                li.love
                    h3 ARTICLES I LOVE
                    .desc
                        img(src="../assets/life.png")
                        h3 Social entrepreneurs take spotlight at TEDWomen
                        p universityofcalifornia.edu | Many of the startups emerging from the University of California have one thing in common…
                    p
                        icon(name="thumbs-up")
                        span 2 likes
                    input(placeholder="Add a comment")
</template>
<script>
</script>
