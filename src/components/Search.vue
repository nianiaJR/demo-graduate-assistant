<style lang="less">
    #app {
        height: auto;
    }
    #app > .search {
        margin: 10px auto;
        width: 1000px;
        background-color: #f2f2f2;
        button {
            cursor: pointer;
        }
        > .operate {
            padding: 10px 10px 30px 10px;
            box-shadow: 1px 1px #aaa;
            background-color: #fff;
            > h3 {
                text-align: center;
                font-weight: bolder;
            }
            > .search-wrap {
                > p {
                    margin-bottom: 10px;
                }
                > .search-box {
                    display: flex;
                    border: 1px solid #aaa;
                    align-items: center;
                    width: 300px;
                    border-radius: 5px;
                    box-shadow: 1px 1px 1px;
                    > .fa-icon {
                        padding: 5px;
                        width: 20px;
                        height: 20px;
                        border-left: 1px solid #aaa;
                    }
                    > input {
                        flex: 1;
                        margin: 0 5px;
                        height: 30px;
                        outline: none;
                        border: none;
                    }
                }
            }
            > .filter-wrap {
                margin-top: 20px;
                > p {
                    margin-bottom: 10px;
                }
                > ul {
                    display: flex;
                    > li {
                        position: relative;
                        > select {
                            padding: 10px 25px;
                            width: 200px;
                            background-color: #ed7b3c;
                            border: none;
                            color: #fff;
                            cursor: pointer;
                            outline: none;
                            -webkit-appearance: none;
                            -webkit-border-radius: 0px;
                        }
                        > .fa-icon {
                            position: absolute;
                            right: 10px;
                            top: 50%;
                            transform: translateY(-50%);
                            width:  15px;
                            height: 15px;
                            color: #fff;
                        }
                        > a {
                            display: inline-block;
                            height: 34px;
                            width: 100px;
                            border: none;
                            background: #6f359e;
                            color: #fff;
                            line-height: 35px;
                            text-align: center;
                        }
                    }
                }
            }
        }

        > .spotlight {
            background: #fff;
            > h3 {
                margin-top: 20px;
                padding: 10px;
                color: #fff;
                background: #558239;
                font-weight: bolder;
            }
            > .show {
                padding: 20px 15px;
                > .intro {
                    > .school {
                        display: flex;
                        > img {
                            width: 200px;
                        }
                        > .desc {
                            padding: 10px;
                            > em {
                                margin-right: 20px;
                            }
                            > button {
                                padding: 10px;
                                color: #fff;
                                outline: none;
                                border: none;
                            }
                            > button + button {
                                margin-left: 10px;
                            }
                            > .green {
                                background: #558239;
                            }
                            > .purple {
                                background: #702f9e;
                            }
                            > p {
                                margin-top: 20px;
                            }
                        }
                    }
                }
                > .basketball, >.beautiful {
                    margin-top: 30px;
                    > h4 {
                        padding: 10px 0;
                    }
                    > .img-wrap {
                        margin: 0 20px;
                    }
                    > .btns {
                        display: flex;
                        margin-top: 10px;
                        > .btn {
                            flex: 1;
                            text-align: center;
                            > button {
                                display: inline-block;
                                padding: 2px 10px;
                                background: #558239;
                                border: none;
                                border-radius: 3px;
                                outline: none;
                                color: #fff;
                                box-shadow: 1px 1px 1px #aaa;
                                cursor: pointer;
                            }
                        }
                    }
                }
                > .beautiful {
                    > .img-wrap {
                        padding-top: 22%;
                        background: url('../assets/campus.jpg') bottom no-repeat;
                        background-size: 93%;
                    }
                }
                > .basketball {
                    > .img-wrap {
                        padding-top: 26%;
                        background: url('../assets/basketball.jpg') bottom no-repeat;
                        background-size: 100%;
                    }
                
                }
            }
            > .see-more {
                display: flex;
                margin-top: 40px;
                padding: 5px 0px;
                align-items: center;
                justify-content: center;
                background: #7f7f7f;
                color: #fff;
                cursor: pointer;
                &:hover {
                    background: #9f9f9f;
                }
            }
        }
    }
</style>
<template lang="pug">
    .search
        .operate
            h3 Explore Your Options
            .search-wrap
                p Alredy know the University
                .search-box
                    input(type="text")
                    icon(name="search")
            .filter-wrap
                p Filter through our database of Universities
                ul
                    li
                        select()
                            option(value="") Location
                            option(value="") Arizona
                            option(value="") California
                            option(value="") Colorado
                            option(value="") Connecticut
                            option(value="") Florida
                            option(value="") lllinois
                            option(value="") Massachusetts
                            option(value="") Michigan
                            option(value="") New York
                            option(value="") North Carolina
                            options(value="") Pennsylvania
                            options(value="") Rohede Island
                            options(value="") Texas
                            options(value="") Virginia
                            options(value="") Washington D.C
                            option(value="") Washington State
                        icon(name="caret-down")
                    li
                        select()
                            option(value="") Acadamic Interest
                            option(value="") Architecture
                            option(value="") Arts and Design
                            option(value="") Bussiness
                            option(value="") Computer Science
                            option(value="") Economics
                            option(value="") Engineering
                            option(value="") English / Literature
                            option(value="") Entrepreneurship
                            option(value="") Health
                            option(value="") Hisotry
                            option(value="") Law / Political Science
                            option(value="") Mathematics
                            option(value="") Psychology
                            option(value="") Sciences
                            option(value="") Sciences
                            option(value="") Sociology
                            option(value="") Sports
                        icon(name="caret-down")
                    li
                        select()
                            option(value="") Tuitition Fee
                            option(value="") US$20,000－$34,999 / year
                            option(value="") US$35,000－$49,999 / year
                            option(value="") Above US$50,000 / year
                        icon(name="caret-down")
                    li
                        select()
                            option(value="") Culture
                            option(value="") Academic commitment
                            option(value="") Friendliness / Inclusivity
                            option(value="") International Diversity
                            option(value="") Athleticslsm / SPorts-loving
                            option(value="") Entrepreneurial
                            option(value="") Environmentally friendly
                            option(value="") Greek Life
                            option(value="") Close to the city
                            option(value="") Strong alumni network
                            option(value="") Restaurants and nightlife
                            option(value="") Number of clubs and community programs
                        icon(name="caret-down")
                    li.find
                        a(href="#/result") Find
        .spotlight
            h3 UNIVERSITY SPOTLIGHT
            .show
                .intro
                    h4 University spotlight of the day
                    .school
                        img(src="../assets/brown.png")
                        .desc
                            em Brown University
                            button.green Learn More
                            button.purple(@click="follow='Following'") {{follow}}
                            p 
                                span Did you know?
                                br
                                span Brown was the first Ivy League school to accept students from all religious affiliations, a statement to the spirit of openness that still embodies Brown today.

                .basketball
                    h4 Universities with Top Basketball teams
                    .img-wrap
                    .btns
                        .btn
                            button learn more
                        .btn
                            button learn more
                        .btn
                            button learn more
                        .btn
                            button learn more
                .beautiful
                    h4 Universities with most beautiful campus
                    .img-wrap
                    .btns
                        .btn
                            button learn more
                        .btn
                            button learn more
                        .btn
                            button learn more
                        .btn
                            button learn more
            .see-more
                span See more
                icon(name="angle-down" width="28" height="28")


</template>
<script>
export default {
    data () {
        return {
            follow: 'Folow'
        }
    }
}
</script>
