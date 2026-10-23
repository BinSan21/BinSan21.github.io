import React from "react";
import sers from '../assets/images/sers.png';
import multisensor from '../assets/images/multisensor.png';
import trafficHMI from '../assets/images/trafficHMI.png';
import indOven from '../assets/images/indOven.png';
import mp3player from '../assets/images/mp3player.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Hardware & Firmware Projects</h1>
        <div className="projects-grid">

            <div className="project">
                <a href="https://rebrand.ly/SersAlertify" target="_blank" rel="noreferrer"><img src={sers} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rebrand.ly/SersAlertify" target="_blank" rel="noreferrer"><h2>SERS: Smart Emergency Response</h2></a>
                <p>Designed and developed the Smart Emergency Response System (SERS) utilizing an ESP32 microcontroller and IoT technology to facilitate real-time alerts, location tracking, and automated communication with emergency responders.</p>
            </div>

            <div className="project">
                <a href="https://www.hackster.io/binyusophsansarona/freertos-multisensor-room-monitoring-system-stm32-blue-pill-95fa28" target="_blank" rel="noreferrer"><img src={multisensor} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.hackster.io/binyusophsansarona/freertos-multisensor-room-monitoring-system-stm32-blue-pill-95fa28" target="_blank" rel="noreferrer"><h2>Multisensor Room Monitoring</h2></a>
                <p>Developed a room monitoring system with a 6-task architecture on an STM32 Blue Pill microcontroller using FreeRTOS. Integrated DHT22, LDR, and PIR sensors, and validated the system using Unity unit tests and Wokwi.</p>
            </div>

            <div className="project">
                <a href="https://rebrand.ly/Traffic_Control" target="_blank" rel="noreferrer"><img src={trafficHMI} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rebrand.ly/Traffic_Control" target="_blank" rel="noreferrer"><h2>Interactive Traffic Control System</h2></a>
                <p>Designed an interactive traffic control simulation on a Renesas RA6M3 HMI Board using the RT-Thread RTOS and LVGL graphics library. Implemented a multi-threaded architecture with a Finite State Machine (FSM).</p>
            </div>

            <div className="project">
                <a href="https://rebrand.ly/ind_oven" target="_blank" rel="noreferrer"><img src={indOven} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rebrand.ly/ind_oven" target="_blank" rel="noreferrer"><h2>Industrial Oven Control System</h2></a>
                <p>Designed a PLC-based Industrial Oven Control System using CODESYS V3.5 and Structured Text (ST). Features an HMI for temperature monitoring, automated heating and cooling, and an alarm system with automatic shutdown protection.</p>
            </div>

            <div className="project">
                <a href="https://www.hackster.io/556333/multithreaded-rt-spark-mp3-player-using-freertos-f30b88" target="_blank" rel="noreferrer"><img src={mp3player} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.hackster.io/556333/multithreaded-rt-spark-mp3-player-using-freertos-f30b88" target="_blank" rel="noreferrer"><h2>Multithreaded Personal MP3 Player</h2></a>
                <p>Developed a multithreaded embedded audio player on an RT-Spark development board (STM32) utilizing FreeRTOS and PlatformIO. Architected a 3-task cooperative model protected by RTOS mutexes.</p>
            </div>

        </div>
    </div>
    );
}

export default Project;