import React, { useState } from 'react';
import './App.css';
import Modal from './Modal';

function App() {
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };
  const closeModal = () => {
    setShow(false);
  };
  return (
    <div className="App">
      <button onClick={openModal} disabled={show}>Open Modal</button>
      {show && (
        <Modal>
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>
            Congue maecenas pulvinar tincidunt fermentum leo. Mattis scelerisque primis fusce placerat netus congue magnis! Sit lorem quam eros sociis cubilia nisi taciti. Torquent nascetur feugiat nisi habitant vehicula. Pulvinar, augue at proin a maecenas. Netus elit natoque sagittis elit rutrum placerat pulvinar suspendisse. Per fermentum ante turpis suscipit! Adipiscing mus sapien quam natoque erat mus lectus nulla elit dictumst est. Tincidunt lacus enim ligula curae; penatibus? Tincidunt urna nascetur porttitor fringilla pellentesque amet facilisis pretium condimentum sed turpis pharetra. Mattis rutrum rutrum, dui eget fames nisi vel laoreet. Suspendisse feugiat blandit adipiscing rhoncus sed amet elementum. Mus arcu a aliquet id magnis duis. Nisi sociosqu blandit vulputate. Malesuada sem felis.
            </p>
            <p>
            Mollis proin donec tempus. Habitasse nulla dignissim ac gravida fringilla. Netus elit enim cras eros cursus integer inceptos amet dignissim malesuada! Suspendisse vestibulum nulla mus arcu proin ante tincidunt facilisis. Habitasse ligula pulvinar nec turpis ad tempor euismod tortor adipiscing! Justo nec scelerisque massa, elementum at potenti nisi et suspendisse lectus. Integer nisl adipiscing facilisis ultrices. Bibendum nisi nostra tincidunt mi adipiscing condimentum mus pharetra mi magnis pretium. Integer ad diam massa velit donec justo diam rhoncus maecenas proin! Habitasse tincidunt leo adipiscing risus orci.
            </p>
            <p>
            Ligula aptent penatibus hendrerit vel mauris leo. Risus tincidunt rhoncus integer nisl, interdum metus sociis rhoncus amet. Litora ante ante proin. Orci nascetur duis erat sagittis risus consequat eleifend a auctor massa varius. Proin litora etiam nam vestibulum platea. Magnis blandit nam habitasse eu eu laoreet felis sodales scelerisque, ante arcu. Venenatis ullamcorper nascetur tristique ante. Lacinia diam praesent gravida! Aenean augue nunc in suspendisse et arcu platea?
            </p>
            <p>
            A montes urna curabitur. Suscipit quis ac dignissim. Eleifend sapien inceptos dolor mattis tellus laoreet neque parturient. Nascetur dictumst blandit condimentum mattis arcu ornare laoreet in lorem. Tempus feugiat etiam eu phasellus et. Imperdiet adipiscing cursus porttitor consectetur sollicitudin pretium sem felis commodo! Id volutpat laoreet suscipit nam lobortis neque commodo quam dis. Iaculis malesuada ac mattis hac erat nam pellentesque sapien duis. Convallis quisque a morbi est congue! Consequat varius neque potenti curabitur condimentum ut, sit fermentum tellus?
            </p>
            <p>
            Per natoque vivamus, pretium etiam faucibus vestibulum fames enim adipiscing facilisi donec sodales. Eget turpis imperdiet pharetra. Morbi egestas eu interdum. Himenaeos sodales viverra ultrices malesuada? Inceptos, velit ac volutpat id. Morbi, amet lectus himenaeos. Tempus venenatis adipiscing convallis leo posuere venenatis ligula ipsum ridiculus ridiculus. Elementum eleifend tortor tortor felis neque netus sed fames adipiscing malesuada condimentum enim. Torquent, congue natoque vitae per venenatis. Ac ac consequat est netus dapibus aliquet dapibus proin ultrices sed tristique porttitor. Commodo cum habitasse molestie quam auctor augue vestibulum gravida molestie vivamus maecenas netus. Mus ac orci, ut enim. Pharetra tellus purus ipsum aptent suscipit dictumst. Potenti dapibus sem tellus enim nisl mi lobortis adipiscing himenaeos auctor. Cras tempor dapibus ullamcorper. Fusce scelerisque fringilla erat, sed volutpat curabitur mi id egestas massa. Fermentum ipsum dignissim nunc habitant.
            </p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default App;
