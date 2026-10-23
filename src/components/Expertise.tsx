import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faMemory, faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "C/C++",
    "Assembly",
    "FreeRTOS",
    "RT-Thread",
    "PlatformIO",
    "STM32",
    "ESP32 / ESP8266",
    "Arduino"
];

const labelsSecond = [
    "Verilog HDL",
    "Xilinx Vivado",
    "PCB Design",
    "Circuit Simulation",
    "Digital Logic",
    "Oscilloscope",
    "Multimeter",
    "3D Modelling"
];

const labelsThird = [
    "Python",
    "MATLAB",
    "CODESYS",
    "PLC",
    "MQTT",
    "Edge Impulse",
    "IoT Architecture"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Firmware & Microcontrollers</h3>
                    <p>I specialize in bare-metal programming and real-time operating systems (RTOS). I have experience architecting multi-threaded applications, handling hardware interrupts, and optimizing memory on STM32 and ESP32 architectures.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMemory} size="3x"/>
                    <h3>Hardware Design & FPGA</h3>
                    <p>I design and simulate digital logic circuits from first principles. My experience includes writing RTL code in Verilog for dual-mode ALUs and configuring custom waveforms in Xilinx Vivado, alongside hands-on prototyping and PCB design.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faNetworkWired} size="3x"/>
                    <h3>IoT & Industrial Automation</h3>
                    <p>I bridge physical hardware with software infrastructure. I build automated industrial control systems using CODESYS and deploy edge computing IoT networks leveraging wireless protocols and MQTT for real-time monitoring.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;