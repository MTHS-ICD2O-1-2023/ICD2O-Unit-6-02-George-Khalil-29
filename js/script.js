// Copyright (c) 2020 George Khalil All rights reserved
//
// Created by: George Khalil
// Created on: May 2024
// This file contains the JS functions for index.html


"use strict"

function cookiesClicker() {
  const cookies = document.getElementById("cookies")
  const clickCount = document.getElementById("click-count")

  // Retrieve click count from localStorage or default to 0
  let currentClickCount = parseInt(localStorage.getItem("cookiesClicker")) || 0

  // Increment click count
  currentClickCount++

  // Update localStorage with new click count
  localStorage.setItem("cookiesClicker", currentClickCount)

  // Update click count displayed on the webpage
  clickCount.innerHTML = currentClickCount
}

// Add event listener to the cookie image to call cookiesClicker function on click
document.getElementById("cookies").addEventListener("click", cookiesClicker)
