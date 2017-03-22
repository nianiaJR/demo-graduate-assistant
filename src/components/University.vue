<style lang="less">
    .university {
        padding: 30px 10%;
        background: #f2f2f2;
        font-family: monospace;
        > .intro {
            display: flex;
            > .logo {
                padding: 18px 30px;
                width: 150px;
                background: #fff;
            }
            > .desc {
                margin-left: 10px;
                background: #fff;
            }
            > .desc {
                flex: 1;
                > .wrap {
                    display: flex;
                    > .schools {
                        flex: 1;
                        padding: 10px 20px;
                        > h3 {
                            font-size: 34px;
                            font-weight: bolder;
                        }
                        > p {
                            color: #7f7f7f;
                            font-weight: bolder;
                            font-size: 20px;
                        }
                    }
                    > .follow {
                        flex: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        > button {
                            padding: 15px 50px;
                            background: #a568d0;
                            color: #fff;
                            border: none;
                            width: 70%;
                            font-size: 34px;
                        }
                    }
                }

                > .state {
                    display: flex;
                    padding: 10px 20px;
                    > p {
                        flex: 1;
                        display: flex;
                        padding: 10px 0 30px 20px;
                        background: #b4c6e6;
                        font-size: 17px;
                        align-items: center;
                        > .fa-icon {
                            color: #fff;
                        }
                        > a {
                            margin-left: 10px;
                            color: #000;
                        }
                    }
                    > p + p {
                        background: #90a9da;
                    }
                }
            }
        }
        > .slides {
            display: flex;
            margin-top: 5px;
            cursor: pointer;
            > ul {
                position: relative;
                width: 250px;
                font-size: 0px;
                > .veil {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                    background: #eee;
                    opacity: 0.5;
                }
            }
            > .rd-swipe {
                flex: 1;
                height: 300px;
                .rd-swipe-pagination-item {
                    background: #aaa;
                }
                .rd-swipe-pagination-item.active {
                    background: #fff;
                }
            }
        }

        > .stat {
            > div {
                box-shadow: 1px 1px 1px #aaa;
                background: #fff;
                > h3 {
                    padding: 2px 15px;
                    background: #a568d0;
                    font-size: 30px;
                    color: #fff;
                }
            }
            > .numbers {
                > table {
                    > tr {
                        > td {
                            font-size: 20px;
                        }
                        > .blue {
                            padding: 5px 20px;
                            text-align: center;
                            font-weight: bolder;
                            color: #4671c2;
                        }
                    }
                }
            }

            > .academic {
                margin-top: 10px;
                > .icons {
                    > .fa-icon {
                        padding: 10px 20px;
                        width: 60px;
                        height: 60px;
                    }
                }
            }
            > .fun {
                margin-top: 10px;
                > .content {
                    > img {
                        float: left;
                    }
                    > p {
                        font-size: 15px;
                        transition: all 3s ease-in-out;
                    }
                }
                > .more {
                    display: flex;
                    justify-content: center;
                    background: #7f7f7f;
                    color: #fff;
                    font-size: 18px;
                    cursor: pointer;
                    > .fa-icon {
                        height: 24px;
                        width: 24px;
                    }
                    &:hover {
                        background: #afafaf;
                    }
                }
            }
            > .interviews {
                margin-top: 10px;
                > h3 {
                    background: #558239;
                }
                > p {
                    padding: 5px 10px;
                    font-size: 15px;
                    font-weight: bold;
                }
                > .videos {
                    display: flex;
                    > iframe {
                        width: 30%;
                        height: 200px;
                    }
                    > iframe + iframe {
                        margin-left: 10px;
                    }
                    > .more-videos {
                        display: flex;
                        width: 10%;
                        justify-content: center;
                        flex-direction: column;
                        align-items: center;
                        > .fa-icon {
                            width: 40px;
                            height: 40px;
                        }
                        > p {
                            font-size: 20px;
                        }
                    }
                }
            }

            > .upcoming {
                margin-top: 10px;
                > h3 {
                    background: #c45c21;
                }
                > .wrap {
                    display: flex;
                    font-size: 14px;
                    > .qa, > .web {
                        flex: 1;
                        display: flex;
                        > .img {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            > .fa-icon {
                                padding: 10px;
                                width: 80px;
                                height: 80px;
                                color: #186696;
                            }
                        }
                        > .desc {
                            padding: 10px;
                            > p {
                                > sup {
                                    font-size: 12px;
                                }
                            }
                            > button {
                                margin-top: 15px;
                                padding: 2px 5px;
                                background: #90a9da;
                                border: none;
                                border-radius: 5px;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<template lang="pug">
.university
    .intro
        .logo
            img(src="../assets/stanford.png" width="150" height="150")
        .desc
            .wrap
                .schools
                    h3 Stanford Uniersity
                    p Palo Alto I California
                    p Private Research University
                .follow
                    button Follow
            .state
                p Canvas.com/uni/stanfordu
                p
                    icon(name="globe")
                    a(href="http://www.stanford.edu/") http://www.stanford.edu/
    .slides
        rd-swipe(:swipe="swipe")
            .rd-swipe-item(:style="{'background-image': `url(${img.url})`}" v-for="(img, index) in imgs")
        ul
            li(@click="switchImg(0)")
                img(src="../assets/s1.jpg" width="250" height="100")
            li(@click="switchImg(1)")
                img(src="../assets/s2.jpg" width="250" height="100")
            li(@click="switchImg(2)")
                img(src="../assets/s3.jpg" width="250" height="100")
            .veil &nbsp;
    .stat
        .numbers
            h3 UNIVERSITY IN NUMBERS
            table
                tr
                    td.blue 1
                    td 
                        p National
                        p Ranking
                    td.blue 7,019
                    td
                        p Enrollment
                        p (Undergraduate)
                tr
                    td.blue 5
                    td
                        p % Admission
                        p rate
                    td.blue 46,320
                    td
                        p Tuition Fees
                tr
                    td.blue 8.2
                    td
                        p % Internation
                        p Students
                    td.blue 14:1
                    td
                        p Student Teacher
                        p ratio
        .academic
            h3 ACADEMIC STRENGTHS
            .icons 
                icon(name="desktop")
                icon(name="graduation-cap")
                icon(name="university")
        .fun
            h3 BULLET POINTS
            .content
                img(src="../assets/fun.png", height="100")
                p The unofficial name for the Stanford mascot is - The Stanford Tree. There has been a fairly selective process to choose the students who get to play the tree, since the responsibility is in high demand.Stanfordhasmanysuccessfulsportteams.Stanfordstudentshavewonmedals ineveryOlympic Games since 1908, winning 244 Olympic medals total, 129 of them gold. In the 2008 Beijing Olympic Games, Stanford won more Olympic medals than any other university in the United States.
                p(v-if="isMore") Stanford has a Cactus Garden, which is a botanical garden with cactus and succulents, made for Jane and Leland Stanford and was planted between 1880-1883. Some of the original plants were restored and are surviving. Stanford’s current community of scholars includes 19 Nobel Prize laureates and 4 Pulitzer Prize winners. In addition,  Stanford is the alma mater of 30 living billionaires and 17 current astronauts.
            .more(v-if="!isMore" @click="seeMore")
                span see more
                icon(name="angle-down")
            .more(v-if="isMore" @click="seeMore")
                icon(name="angle-up")
        .interviews
            h3 INTERVIEWS
            p videos
            .videos
                iframe(src="https://www.youtube.com/embed/TfmJQ5ndktI" frameborder="0" allowfullscreen)
                iframe(src="https://www.youtube.com/embed/_UYhTylqC9o" frameborder="0" allowfullscreen)
                iframe(src="https://www.youtube.com/embed/h_MektcHgII" frameborder="0" allowfullscreen)
                .more-videos
                    icon(name="arrow-circle-o-right")
                    p see more
        .upcoming
            h3 UPCOMING EVENTS
            .wrap
                .web
                    .img
                        img(src="../assets/webinar.png" width="150" height="150")
                    .desc
                        h3 Webinar Series
                        p Stanford DNA - What our students / alumni
                        p have in common
                        h3 When
                        p 
                           span Wednesday, October 15
                           sup th
                           span , 2017
                        p 9:00am (Beijing Time)
                        button sign up
                .qa
                    .img
                        img(src="../assets/qa.png" width="150" height="150")
                    .desc
                        h3 Q&A Session
                        p Open Q&A with current Senior Student -
                        p Mei Han on life at Stanford
                        h3 When
                        p 
                            span Saturday, November 3
                            sup rd
                            span , 2017
                        p 8:30am (Beijing Time)
                        button sign up

                        
        
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
            isMore: false,
            imgs: [
                {
                    url: require('../assets/school1.jpg')
                },
                {
                    url: require('../assets/school2.jpg')
                },
                {
                    url: require('../assets/school3.jpg')
                }
            ]
        }
    },
    methods: {
        switchImg (index) {
            this.swipe = {
                activeIndex: index
            }
        },
        seeMore () {
            this.isMore = !this.isMore
        }
    }
}
</script>
