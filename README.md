[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/hacs/integration)


# simple-clock-card
A text based simple clock for people who use Home Assistant on a panel

Based on https://github.com/arjhun/Homeassistant-Lovelace-Cards @arjhun


![24h clock](https://i.imgur.com/n37gyxZ.png)  

![military without seconds](https://i.imgur.com/ej4AFO3.png)

# Installation:
Follow only one of these installation methods.

<details>
  <summary><b>Installation and tracking with HACS:</b></summary>

1. You can install this custom component by adding this repository (https://github.com/fufar/simple-clock-card) to HACS in the settings menu of HACS first. You will find the custom component in the integration menu afterwards, look for 'Simple Clock Card'.

2. Set the lovelace panel
</details>

<details>
  <summary><b>Manual installation:</b></summary>

1. Copy simple-clock-card.js into your 'www' folder in the hass config directory. The *'www'* folder can be accesed via *'/local/'* in your configuration I've put my custom elements in the sub folder *'elements'* and the js file of this card in the folder *'simple-clock-card'* as an example.
2. Enable advanced mode and in your lovelace dashboard settings
3. Add a resource ![add a resource](https://i.imgur.com/pySUU4V.png)

   or if you use yaml to configure lovelace:

		resources:
			- type: module
	        	  url: /hacsfiles/elements/simple-clock-card/simple-clock-card.js
4. Set the lovelace panel
</details>


# Set lovelace panel

Add the following lines to a view in '*cards:*' as a *'manual card'* or use your yaml configuration and add:

		- type: 'custom:simple-clock-card'

## Options

| option             | default | description                                                                  |
|--------------------|:-------:|------------------------------------------------------------------------------|
| use_military       | true    | When true shows a 24h format clock instead of a 12h format clock with AM/ PM |
| hide_seconds       | false   | When true hides the seconds                                                  |
| font_size          | 4rem    | Size of the font in rem. Units of measurement is required                    |
| paddingLeft_size   | 0px     | Size of the lovelace field in px. Units of measurement is required           |
| paddingRight_size  | 0px     | Size of the lovelace field in px. Units of measurement is required           |
| paddingTop_size    | 60px    | Size of the lovelace field in px. Units of measurement is required           |
| paddingBottom_size | 60px    | Size of the lovelace field in px. Units of measurement is required           |

## Example
- show a 24h clock with seconds:

		- type: 'custom:simple-clock-card'
		  use_military: true
		  hide_seconds: false
		  font_size: 6rem
		  paddingLeft_size: 32px
		  paddingRight_size: 32px
		  paddingTop_size: 32px
		  paddingBottom_size: 32px

Original author: github.com/arjhun
