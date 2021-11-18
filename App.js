import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import "./style.css";

export default function App() {

    useEffect(() => {

        // ações dos botões

        document.querySelectorAll(".btn").forEach((btn) => { 
            btn.addEventListener("click", function() {
                document.getElementById("tx").value += btn.innerHTML;
            });
        });

        document.querySelectorAll(".op").forEach((btn) => { 
            btn.addEventListener("click", function() {
                document.getElementById("tx").value += btn.innerHTML;
            });
        });
        
        document.getElementById("resultado").addEventListener("click", function(){
            const tx = document.getElementById("tx").value;

            if (tx.indexOf("+") >= 0) {
                const nrs = tx.split("+");
                let total = 0;

                for (let i = 0; i < nrs.length; i++) {
                    total += parseInt(nrs[i]);   
                }

                document.getElementById("tx").value = total;
            }
            
            else if (tx.indexOf("-") >= 0) {
                const nrs = tx.split("-");
                document.getElementById("tx").value = parseInt(nrs[0]) - parseInt(nrs[1]);
            }
            
            else if (tx.indexOf("x") >= 0) {
                const nrs = tx.split("x");
                document.getElementById("tx").value = parseInt(nrs[0]) * parseInt(nrs[1]);
            }
            
            else if (tx.indexOf("/") >= 0) {
                const nrs = tx.split("/");
                document.getElementById("tx").value = parseInt(nrs[0]) / parseInt(nrs[1]);
            } 
            
            else {

            }
        });

    });

    return (
        <><input class="tx" id="tx" type="text"/>
        <div class="buttons">
            <button class="btn">1</button>
            <button class="btn">2</button>
            <button class="btn">3</button>
            <button class="op">+</button>
            <button class="btn">4</button>
            <button class="btn">5</button>
            <button class="btn">6</button>
            <button class="op">-</button>
            <button class="btn">7</button>
            <button class="btn">8</button>
            <button class="btn">9</button>
            <button class="op">x</button>
            <button id="resultado" class="res">=</button>
            <button class="op">/</button>
        </div>
        </>
    );
}