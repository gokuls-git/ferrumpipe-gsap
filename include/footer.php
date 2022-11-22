<footer class="footer">
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <!-- Lazyload -->
    <script src="assets/js/vendors/lazyload-all.js" async=""></script>
    <!-- <script src="assets/js/vendors/slick.min.js"></script> -->

    <!-- tweenmax animation -->
    <!-- <script type="text/javascript" src="assets/js/TweenMax.min.js"></script>
    <script type="text/javascript" src="assets/js/ScrollMagic.js"></script>
    <script type="text/javascript" src="assets/js/animation.gsap.min.js"></script>
    <script type="text/javascript" src="assets/js/animation.js"></script> -->

    <script>
        function loadJS(u) {
            var r = document.getElementsByTagName("script")[0],
                s = document.createElement("script");
            s.src = u;
            r.parentNode.insertBefore(s, r);
        }
    </script>
</footer>