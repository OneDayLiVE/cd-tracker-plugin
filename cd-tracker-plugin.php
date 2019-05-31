<?php
/*
Plugin Name: CD Tracker Plugin
Plugin URI: https://github.com/OneDayLiVE/cd-tracker-plugin
Description: Used by millions, to make people smile.
Version: 1.5.2
Author: Bradford Knowlton
Author URI: https://bradknowlton.com/
License: BSD-3-Clause
*/

add_action( 'wp_enqueue_scripts', 'cd_tracker_enqueue_scripts' );
function cd_tracker_enqueue_scripts() {
	wp_enqueue_script( 'cdt', plugins_url( '/cdt.js', __FILE__ ), array('jquery'), '1.5.2', true );
}

