# Responsive Swiper History Slider
![image](https://user-images.githubusercontent.com/17318047/220895614-782f0b63-b962-4874-bc7b-250a58a2603f.png)


<pre>
<code>
/** History slider */
function my_history() {
    if (is_page('our-background') || is_page('about-us')) {
        wp_enqueue_style('swiper-bundle-style', get_stylesheet_directory_uri() . '/css/swiper-bundle.min.css', ['hello-elementor-child-style',], VERSIONNO);
        wp_enqueue_style('history-swiper-style', get_stylesheet_directory_uri() . '/css/history-swiper.css', ['hello-elementor-child-style',], VERSIONNO);
        wp_enqueue_script('history-swiper-js', get_stylesheet_directory_uri() . '/js/history-swiper.js', VERSIONNO);
    }
}

add_action('wp_enqueue_scripts', 'my_history');
</code>
</pre>

<code>function history_swiper_function() {</code>
    $output = '
      <div class="history-swiper-wrap">

      <div class="swiper history-dates">
        <div class="swiper-wrapper"></div>

        <div class="history-dates__nav">
          <div class="history-dates__nav-arr history-dates__nav-prev">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 11L10 2L1 11" stroke="#555555" stroke-width="2" />
            </svg>
          </div>
          <div class="history-dates__nav-arr history-dates__nav-next">
            <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L10 10L19 1" stroke="#555555" stroke-width="2" />
            </svg>
          </div>
        </div>
      </div>

      <div class="swiper history-swiper">
        <div class="swiper-wrapper"></div>
      </div>

    </div>
  ';
<code>    return $output;
}

add_shortcode('history_swiper', 'history_swiper_function');
</code>
