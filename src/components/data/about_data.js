import React from 'react';
import api from '../../assets/icons/api.svg'
import backend from '../../assets/icons/backend.svg'
import repair from '../../assets/icons/repair.svg'
import computer from '../../assets/icons/computer.svg'
import algo from '../../assets/icons/algo.svg'
import puzzle from '../../assets/icons/puzzle.svg'

const skills = [
    {
        icon:computer,
        title:"FrontEnd Devlopment",
        about: "I can build a Beautiful Scaleableand scalable website using HTML,CSS,JAVASCRIPT,REACT ",
    },
    {
        icon:backend,
        title:"BackEnd Devlopment",
        about: "Handle database, server, API, using SQLLITE",
    },
    {
        icon:api,
        title:"API Devlopment",
        about: ["I can devlop robust api using",<strong key={1}> django-rest-api</strong>]
    },
    {
        icon:algo,
        title:"Compititive Coding",
        about: "A daily problem solver on hackerrank,and codechef",
    },
    {
        icon:puzzle,
        title:"UI/UX Designer",
        about: "minimilastic user interface designer using figma and framer",
    },
    {
        icon:computer,
        title:"Whatever",
        about: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },

]

export default skills;