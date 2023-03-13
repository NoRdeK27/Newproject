  $(function () {

    $('body').on('click','.main-bottom'function(){
            var dealTemplate = `<div>
                                <nav class="menu-container2">
                                  <ul>
                                    <li><a href="#">Главная</a></li>
                                    <li><a href="#">Политика</a></li>
                                    <li><a href="#">Общество</a></li>
                                    <li><a href="#">Экономика</a></li>
                                    <li><a href="#">В мире</a></li>
                                    <li><a href="#">Проишествия</a></li>
                                    <li><a href="#">Спорт</a></li>
                                    <li><a href="#">Наука</a></li>
                                    <li><a href="#">Туризм</a></li>
                                  </ul>
                                 </nav>
                                 </div>
              `;                
              $('#header').append(dealTemplate);

            })

            $('body').on('click', '.main-bottom', function () {
        var del = $(this);
        var blockBox = del.closest('.main-container2')
        blockBox.remove();
      })


      })