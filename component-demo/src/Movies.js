import React, { useEffect, useState } from 'react';

function Movies() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  useEffect(() => {
    const interval = setInterval(() => setCurrentTime(new Date()), 1000);
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="movies">
      <p className='clock'>Clock: {currentTime.toLocaleString()}</p>
      <p className='current-scroll'>Current scroll position: {scrollPosition}px</p>
      <div>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar eu sem vitae volutpat. Phasellus turpis urna, euismod ac pretium ut, aliquet eu sapien. Phasellus eleifend malesuada interdum. Morbi non felis feugiat dui congue maximus. Nam dolor libero, pretium in aliquet non, gravida non ligula. Nulla et eros facilisis odio sagittis congue in at nibh. Aenean a congue felis, at blandit diam. Ut sit amet volutpat arcu, sit amet sodales lacus. Nullam porta, ligula quis porttitor elementum, erat metus cursus arcu, et tincidunt eros libero sed elit. Nam eget sodales sapien. Vestibulum elementum, lacus ac convallis lacinia, dolor ligula iaculis odio, eu egestas lectus tortor nec metus. Duis lorem nulla, sagittis ut venenatis eu, laoreet ut mi.</p>

<p>Phasellus velit neque, tempus nec lobortis in, consequat id dolor. Duis accumsan eget enim in consequat. Integer ullamcorper lorem metus, et pretium tellus tristique tempor. Nunc eget massa nibh. Etiam lacus turpis, semper eget faucibus sit amet, bibendum sed ex. Quisque accumsan metus tellus, et egestas tellus sodales eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nibh erat. Aenean finibus lacinia ligula at tristique. Nam mattis, purus vitae sagittis dictum, tortor urna pellentesque sapien, quis pretium nunc lorem id quam. Mauris leo tortor, egestas sed sapien in, facilisis fermentum libero. Pellentesque pharetra gravida nibh a gravida. Sed sit amet venenatis neque, ac dapibus dolor. Curabitur id elit quis arcu finibus accumsan sit amet eu ante. Proin dictum, justo sit amet dictum pellentesque, est sapien consectetur nisi, eget tempus lectus metus in mi. Integer quis odio neque.</p>

<p>Integer enim orci, vulputate vitae nunc in, finibus pharetra tortor. Morbi tempus, massa a interdum finibus, magna quam laoreet diam, eget rutrum neque sem ac libero. Proin eu nisi dapibus, luctus dui ac, facilisis ante. Sed finibus quam non neque vestibulum, in viverra lacus placerat. Duis commodo lectus odio, at pellentesque ex molestie in. Suspendisse ac iaculis eros, iaculis tristique lorem. Duis eleifend ut ligula ac vulputate. Aliquam tristique efficitur orci, eget faucibus odio. Maecenas eu ligula sit amet quam dapibus malesuada eu id magna. Sed imperdiet purus vitae justo porttitor, rhoncus egestas odio scelerisque. Ut ac luctus odio. Maecenas cursus lorem vel lacus euismod, ac vestibulum felis vulputate. Phasellus ac ante libero. Phasellus porta nisi ut ipsum pretium volutpat. Mauris diam urna, egestas non risus eget, tincidunt venenatis erat.</p>

<p>Sed et tincidunt est, vitae ultrices felis. Mauris vel lectus volutpat, aliquam dui at, faucibus urna. Ut turpis ante, dictum eu pellentesque eget, ornare vitae dolor. Donec nec tellus commodo, porta augue in, ultricies dui. Curabitur eget porta justo. Mauris suscipit suscipit neque nec tempus. Etiam tempor libero ut elit posuere, id hendrerit augue consectetur. Nullam bibendum elementum ipsum pharetra fringilla. Nunc rhoncus velit in risus sollicitudin mattis.</p>

<p>Donec volutpat quam mi, eu vulputate ipsum auctor a. Proin rhoncus felis sed ex pretium pretium. Vivamus ligula nibh, congue vel enim pellentesque, accumsan eleifend dolor. Integer in pharetra dolor. Phasellus aliquam nisi at velit porttitor blandit. Nullam mattis gravida velit, ut egestas nulla pulvinar quis. Duis ipsum mauris, tempus ac viverra sed, finibus id felis. Cras ac cursus sem, consequat sollicitudin ante. Proin consequat lectus ligula.</p>

<p>Sed porta commodo urna, id lobortis augue. Donec a orci molestie, scelerisque justo vel, fermentum ante. Duis non enim nec risus volutpat commodo ac vel libero. Praesent scelerisque, quam sit amet consectetur cursus, mauris mauris lobortis leo, nec porttitor arcu dolor eget ligula. Phasellus pulvinar luctus sem, ac facilisis eros dapibus et. Nulla facilisi. Nunc vulputate malesuada mauris, sit amet porttitor elit fermentum eget. Aliquam egestas a nulla a euismod. Nunc faucibus arcu elit, vitae condimentum massa tincidunt sed. Etiam ut nunc at sapien rutrum bibendum in nec metus. Sed eget turpis ornare tellus rutrum faucibus. Nullam consequat dui vel leo tincidunt, elementum vehicula nulla rutrum. Aliquam ligula ante, vestibulum vitae justo in, auctor semper ante.</p>

<p>Sed efficitur velit eu ultrices pretium. Etiam vel neque quis sem consequat auctor vel vitae urna. In suscipit faucibus arcu, sit amet feugiat purus pellentesque eget. Nullam id vulputate felis. Sed cursus aliquam magna, id dignissim turpis egestas eu. Curabitur quis turpis eget dui aliquet aliquam sit amet eget nulla. Phasellus tempor faucibus tincidunt. Donec et nunc arcu. Nam at scelerisque est.</p>

<p>Duis quam velit, eleifend ultricies sem ut, ullamcorper malesuada libero. Integer mattis mi diam, a tristique tortor volutpat ut. Cras orci ligula, sagittis sit amet erat eget, volutpat euismod purus. Aliquam ut dictum leo. Etiam dignissim feugiat arcu vel finibus. Cras imperdiet magna elementum magna posuere, a pulvinar dolor facilisis. Proin faucibus faucibus lorem non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ultricies cursus nunc id varius.</p>

<p>Phasellus fringilla nisl sed metus lacinia, viverra tempus mauris sodales. Nam eget facilisis arcu. Etiam et dolor volutpat, pulvinar nisl a, tristique libero. Vestibulum dictum, diam et fringilla rhoncus, augue massa finibus mauris, in rhoncus est tellus eget odio. Suspendisse fringilla, neque nec malesuada venenatis, risus est pharetra libero, at euismod mi diam id urna. Cras ante magna, imperdiet vel neque non, dapibus rhoncus urna. Fusce pulvinar elit eget lectus sodales maximus.</p>

<p>Curabitur sodales tellus elementum orci dictum, quis luctus nisl vulputate. Proin eu semper ex, ac iaculis neque. Maecenas fermentum, tortor sit amet elementum vulputate, sapien tortor ullamcorper ligula, ac vestibulum nunc leo sit amet lacus. Praesent malesuada, nibh vitae facilisis egestas, magna lacus eleifend velit, sed ullamcorper tortor dolor at ligula. Aliquam eget diam et est volutpat mollis. Vivamus a hendrerit diam. Proin eu scelerisque risus, id lobortis magna. Vivamus vitae elementum elit, vel feugiat dolor.</p>

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent pulvinar eu sem vitae volutpat. Phasellus turpis urna, euismod ac pretium ut, aliquet eu sapien. Phasellus eleifend malesuada interdum. Morbi non felis feugiat dui congue maximus. Nam dolor libero, pretium in aliquet non, gravida non ligula. Nulla et eros facilisis odio sagittis congue in at nibh. Aenean a congue felis, at blandit diam. Ut sit amet volutpat arcu, sit amet sodales lacus. Nullam porta, ligula quis porttitor elementum, erat metus cursus arcu, et tincidunt eros libero sed elit. Nam eget sodales sapien. Vestibulum elementum, lacus ac convallis lacinia, dolor ligula iaculis odio, eu egestas lectus tortor nec metus. Duis lorem nulla, sagittis ut venenatis eu, laoreet ut mi.</p>

<p>Phasellus velit neque, tempus nec lobortis in, consequat id dolor. Duis accumsan eget enim in consequat. Integer ullamcorper lorem metus, et pretium tellus tristique tempor. Nunc eget massa nibh. Etiam lacus turpis, semper eget faucibus sit amet, bibendum sed ex. Quisque accumsan metus tellus, et egestas tellus sodales eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a nibh erat. Aenean finibus lacinia ligula at tristique. Nam mattis, purus vitae sagittis dictum, tortor urna pellentesque sapien, quis pretium nunc lorem id quam. Mauris leo tortor, egestas sed sapien in, facilisis fermentum libero. Pellentesque pharetra gravida nibh a gravida. Sed sit amet venenatis neque, ac dapibus dolor. Curabitur id elit quis arcu finibus accumsan sit amet eu ante. Proin dictum, justo sit amet dictum pellentesque, est sapien consectetur nisi, eget tempus lectus metus in mi. Integer quis odio neque.</p>

<p>Integer enim orci, vulputate vitae nunc in, finibus pharetra tortor. Morbi tempus, massa a interdum finibus, magna quam laoreet diam, eget rutrum neque sem ac libero. Proin eu nisi dapibus, luctus dui ac, facilisis ante. Sed finibus quam non neque vestibulum, in viverra lacus placerat. Duis commodo lectus odio, at pellentesque ex molestie in. Suspendisse ac iaculis eros, iaculis tristique lorem. Duis eleifend ut ligula ac vulputate. Aliquam tristique efficitur orci, eget faucibus odio. Maecenas eu ligula sit amet quam dapibus malesuada eu id magna. Sed imperdiet purus vitae justo porttitor, rhoncus egestas odio scelerisque. Ut ac luctus odio. Maecenas cursus lorem vel lacus euismod, ac vestibulum felis vulputate. Phasellus ac ante libero. Phasellus porta nisi ut ipsum pretium volutpat. Mauris diam urna, egestas non risus eget, tincidunt venenatis erat.</p>

<p>Sed et tincidunt est, vitae ultrices felis. Mauris vel lectus volutpat, aliquam dui at, faucibus urna. Ut turpis ante, dictum eu pellentesque eget, ornare vitae dolor. Donec nec tellus commodo, porta augue in, ultricies dui. Curabitur eget porta justo. Mauris suscipit suscipit neque nec tempus. Etiam tempor libero ut elit posuere, id hendrerit augue consectetur. Nullam bibendum elementum ipsum pharetra fringilla. Nunc rhoncus velit in risus sollicitudin mattis.</p>

<p>Donec volutpat quam mi, eu vulputate ipsum auctor a. Proin rhoncus felis sed ex pretium pretium. Vivamus ligula nibh, congue vel enim pellentesque, accumsan eleifend dolor. Integer in pharetra dolor. Phasellus aliquam nisi at velit porttitor blandit. Nullam mattis gravida velit, ut egestas nulla pulvinar quis. Duis ipsum mauris, tempus ac viverra sed, finibus id felis. Cras ac cursus sem, consequat sollicitudin ante. Proin consequat lectus ligula.</p>

<p>Sed porta commodo urna, id lobortis augue. Donec a orci molestie, scelerisque justo vel, fermentum ante. Duis non enim nec risus volutpat commodo ac vel libero. Praesent scelerisque, quam sit amet consectetur cursus, mauris mauris lobortis leo, nec porttitor arcu dolor eget ligula. Phasellus pulvinar luctus sem, ac facilisis eros dapibus et. Nulla facilisi. Nunc vulputate malesuada mauris, sit amet porttitor elit fermentum eget. Aliquam egestas a nulla a euismod. Nunc faucibus arcu elit, vitae condimentum massa tincidunt sed. Etiam ut nunc at sapien rutrum bibendum in nec metus. Sed eget turpis ornare tellus rutrum faucibus. Nullam consequat dui vel leo tincidunt, elementum vehicula nulla rutrum. Aliquam ligula ante, vestibulum vitae justo in, auctor semper ante.</p>

<p>Sed efficitur velit eu ultrices pretium. Etiam vel neque quis sem consequat auctor vel vitae urna. In suscipit faucibus arcu, sit amet feugiat purus pellentesque eget. Nullam id vulputate felis. Sed cursus aliquam magna, id dignissim turpis egestas eu. Curabitur quis turpis eget dui aliquet aliquam sit amet eget nulla. Phasellus tempor faucibus tincidunt. Donec et nunc arcu. Nam at scelerisque est.</p>

<p>Duis quam velit, eleifend ultricies sem ut, ullamcorper malesuada libero. Integer mattis mi diam, a tristique tortor volutpat ut. Cras orci ligula, sagittis sit amet erat eget, volutpat euismod purus. Aliquam ut dictum leo. Etiam dignissim feugiat arcu vel finibus. Cras imperdiet magna elementum magna posuere, a pulvinar dolor facilisis. Proin faucibus faucibus lorem non sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam ultricies cursus nunc id varius.</p>

<p>Phasellus fringilla nisl sed metus lacinia, viverra tempus mauris sodales. Nam eget facilisis arcu. Etiam et dolor volutpat, pulvinar nisl a, tristique libero. Vestibulum dictum, diam et fringilla rhoncus, augue massa finibus mauris, in rhoncus est tellus eget odio. Suspendisse fringilla, neque nec malesuada venenatis, risus est pharetra libero, at euismod mi diam id urna. Cras ante magna, imperdiet vel neque non, dapibus rhoncus urna. Fusce pulvinar elit eget lectus sodales maximus.</p>

<p>Curabitur sodales tellus elementum orci dictum, quis luctus nisl vulputate. Proin eu semper ex, ac iaculis neque. Maecenas fermentum, tortor sit amet elementum vulputate, sapien tortor ullamcorper ligula, ac vestibulum nunc leo sit amet lacus. Praesent malesuada, nibh vitae facilisis egestas, magna lacus eleifend velit, sed ullamcorper tortor dolor at ligula. Aliquam eget diam et est volutpat mollis. Vivamus a hendrerit diam. Proin eu scelerisque risus, id lobortis magna. Vivamus vitae elementum elit, vel feugiat dolor.</p>
      </div>
    </div>
  );
}

export default Movies;
