import React from 'react';
import { storiesOf } from '@storybook/react';

import CONSTANTS from '../../modifiers/constants';
import colors from '../../modifiers/colors';
import Helpers from '../../modifiers/helpers';
import Table from '../../components/table';

const overviewColors = 'Overview/Colors';
const stories = storiesOf(overviewColors, module);

const { 
    RED, BLUE, GREEN, ORANGE,
    GREY, BLACK, WHITE
} = CONSTANTS.COLORS.BASE;

const {
    red, blue, green, orange,
    grey, black, white
} = colors;

const { hex2rgb, hex2hsl } = new Helpers;

const baseColors = [
    {
        colorName: RED,
        hex: red,
        rgb: hex2rgb(red),
        hsl: hex2hsl(red)
    },
    {
        colorName: BLUE,
        hex: blue,
        rgb: hex2rgb(blue),
        hsl: hex2hsl(blue)
    },
    {
        colorName: GREEN,
        hex: green,
        rgb: hex2rgb(green),
        hsl: hex2hsl(green)
    },
    {
        colorName: ORANGE,
        hex: orange,
        rgb: hex2rgb(orange),
        hsl: hex2hsl(orange)
    },
    {
        colorName: GREY,
        hex: grey,
        rgb: hex2rgb(grey),
        hsl: hex2hsl(grey)
    },
    {
        colorName: BLACK,
        hex: black,
        rgb: hex2rgb(black),
        hsl: hex2hsl(black)
    },
    {
        colorName: WHITE,
        hex: white,
        rgb: hex2rgb(white),
        hsl: hex2hsl(white)
    }
]

stories    
    .add(
        'Base Color', () => {
            return (
                <Table>
                    <thead>
                        <tr>
                            <th scope="col">Color</th>
                            <th scope="col">Color name</th>                        
                            <th scope="col">HEX</th>
                            <th scope="col">RGB</th>
                            <th scope="col">HSL</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {
                            baseColors.map(
                                ({ colorName, hex, rgb, hsl }) => 
                                <tr>
                                    <td>
                                        <div style={{width: 20, height: 20, backgroundColor: hex, borderRadius: 3}}></div>
                                    </td>
                                    <td>{colorName}</td>                                    
                                    <td>{hex}</td>
                                    <td>{rgb}</td>
                                    <td>{hsl}</td>
                                </tr>   
                            )
                        }                                             
                    </tbody>
                </Table>
            )
        }
    );    

export default stories;