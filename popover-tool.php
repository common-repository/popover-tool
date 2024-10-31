<?php
/**
 * Plugin Name: Popover Tool
 * Plugin URI: -
 * Description: It can add popover content on text.
 * Author: Chintesh Prajapati
 * Author URI: - https://profiles.wordpress.org/chinteshprajapati/
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

defined( 'ABSPATH' ) || exit;

/**
 * Enqueue the block's assets for the editor.
 *
 * wp-blocks:  The registerBlockType() function to register blocks.
 * wp-element: The wp.element.createElement() function to create elements.
 * wp-i18n:    The __() function for internationalization.
 *
 * @since 1.0.0
 */
function popover_tool_backend_enqueue() {
    wp_enqueue_script(
        'popover-tool-backend-script', // Unique handle.
        plugins_url( 'js/block.build.js', __FILE__ ), // block.js: We register the block here.
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor'  ) // Dependencies, defined above.
    );
    wp_enqueue_style(
        'popover-tool-css', // Unique handle.
        plugins_url( 'css/popover-tool.css', __FILE__ ), // block.js: We register the block here.
        ''// Dependencies, defined above.
    );
    wp_enqueue_script( 'popover-popper-js', plugins_url( 'js/popper.min.js', __FILE__ ), array('jquery'), '20151215', true );

    wp_enqueue_script( 'popover-tippy-js', plugins_url( 'js/tippy.js', __FILE__ ), array('jquery'), '20151215', true );

    wp_enqueue_script( 'popover-tool-js', plugins_url( 'js/popover-tool.js', __FILE__ ), array('jquery','popover-popper-js','popover-tippy-js'), '20151215', true );
}
add_action( 'enqueue_block_editor_assets', 'popover_tool_backend_enqueue' );
add_action( 'init', 'popover_tool_backend_enqueue' );