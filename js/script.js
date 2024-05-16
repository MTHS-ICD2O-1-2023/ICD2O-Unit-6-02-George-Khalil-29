// Copyright (c) 2020 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html


"use strict"

/*
funsction
 */

function cookiesClicker() {
  const cookie = document.getElementById("cookie")
  const clickCount = document.getElementById("click-count")

  // Check if there is a score in local storage, otherwise set it to 0
  let score = parseInt(localStorage.getItem("score")) || 0

  if (localStorage.cookiesClicker) {
    localStorage.cookiesClicker = Number(localStorage.cookiesClicker) + 1
  } else {
    localStorage.cookiesClicker = 1
  }
  document.getElementById(result).innerHTML =
    "Yoru score is:" + localStorage.cookiesClicker
}