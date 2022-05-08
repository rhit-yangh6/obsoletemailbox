import './App.css';
import mailbox1 from './imgs/mailbox-1.jpeg';
import mailbox2 from './imgs/mailbox-2.jpeg';
import mailbox3 from './imgs/mailbox-3.jpeg';
import mailbox4 from './imgs/mailbox-4.jpeg';
import qrCode from './imgs/qr-code.jpeg';
import ReactCardFlip from "react-card-flip";
import {useState} from "react";
import "antd/dist/antd.css";
import { Modal } from 'antd';

function App() {
  const [flip3, setFlip3] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);


  const showModal = () => {
    setModalVisible(true);
  };

  const handleOk = () => {
    setModalVisible(false);
  };

  const showModal2 = () => {
    setModal2Visible(true);
  };

  const handleOk2 = () => {
    setModal2Visible(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='scroll'>
          <p className="marquee-r">
            <span>&nbsp;I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here&nbsp;</span>
          </p>
          <p className="marquee-r marquee2-r">
            <span>&nbsp;I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here&nbsp;</span>
          </p>
        </div>


        <div className='img-wrapper'>
          <img className='img-mailbox' src={mailbox4} alt='mb4' style={{cursor: 'pointer'}} onClick={showModal2}/>

          <img className='img-mailbox' src={mailbox2} alt='mb2' style={{cursor: 'pointer'}} onClick={showModal} />

          <ReactCardFlip isFlipped={flip3} flipDirection="horizontal" >
            <div onMouseEnter={() => {setFlip3(!flip3)}}>
              <img className='img-mailbox' src={mailbox3} alt='mb3' />
            </div>
            <div className='card-back-qr-code' onMouseLeave={() => {setFlip3(!flip3)}} >
              <img className='qr-code' src={qrCode} alt='qr-code' />
            </div>
          </ReactCardFlip>

          <img className='img-mailbox' src={mailbox1} alt='mb1' />

        </div>
        <div className='scroll'>
          <p className="marquee">
            <span>&nbsp;I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here&nbsp;</span>
          </p>
          <p className="marquee marquee2">
            <span>&nbsp;I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here I am Here&nbsp;</span>
          </p>
        </div>

        <Modal title="&nbsp;" visible={modal2Visible} onOk={handleOk2} onCancel={handleOk2}>
          <p>亲爱的Grey：</p>

          <br/>
          <p>你好！</p>
          <p>自从1月11日相遇以来，我时不时的会想念你，本来已经习惯了天空中日出又日落，建筑翻新又变旧，
            身边漠然的过路人匆匆走过，这些一切都表现得丝毫没有与我的瓜葛，繁华喧闹的城市，没人愿意在乎一个又老又掉漆的破邮筒，我自己也是。</p>
          <p>你给了我数不清的鼓励。</p>
          <p>你夸赞我是个勤劳的邮筒，一个坚强的邮筒，还有许多我未曾设想过的优点。吞下过信件的我明白，这些对着不会也无法回答的物品说出的话，
            真正的听众与想要倾诉的对象，是你自己。</p>
          <p>这也没什么，我是邮筒，擅长封存想要送达的信息。</p>
          <p>请͒̔́̓͡不̓̽͋̊́̎̊̓̾̓̎̏̕用҇̄̀̍̍̎̇̏́̀̽̒担̅͂̑̑̀̔̊͂͆̕心̆̔́̏͛͋̈̇͗̑͠我̉̊̽̇͊̎͒̇̍͝，̛̑̉͒́̌我̌̋͑̎̄́̉̎͛̎͝不̍̂́̑͐͒̅̽̔͒̀̂͝会̛̀̓̽͊̓͑̈做́̈̒͆̄̕出̛̎̊͌̓̐什͂̈́̀̓͝</p>
          <p>请不用担心我，即使时代变迁，信件已经失去了它本身的意义，成为了用来自我陶醉的一片寻常的纸，我也清晰的理解，连接，
            仍然是你们之间本能的需求。而这职能的丧失才是让我这没人在乎的寻常老邮筒，变得不那么普通的原因。而此时此刻你们正在使用的，
            用来达成交流的工具，又会在将来某一时刻彻底被替代，成为像我一样的老邮筒。</p>
          <p>我很高兴帮助他人封存哀思，封存想念，封存愤怒，封存热爱，封存欲望，封存野心，接着在某一时刻将它们统统寄出。</p>
          <p>不过我也很喜欢像现在这样帮人封存记忆，不再提起</p>
          <p>感谢你朋友，是你让我能够说出这些简单的自我介绍，我也有些礼物送给你，很抱歉无法很好的使用电脑这样深奥复杂的工具，
            所以我暂时只能做到这个水平，但是我知道写点有趣的游戏一直是你喜欢做的事情，那就用你҈̭̬̰̫͖͇̳̙͕̙̜͈̞̰̔̌̈́̓̎͋̐的̴̠͙̮̠̆̎̌̇͊̈̀̄̋̈̑̇̂̄͗̑遗҈̲͇͚͍͉̜̖̮͇͖̟͖̰̍͌̉̈́͂̿̍̇̉̒͌物̵͍̯͓͈͍̟̩̖͓͔͉͕͌͛͗̈́̉́́̚</p>
          <p>就用你的方式，里面有着你小时候幻想的密室与邪恶的魔王，一场奇幻的历险和别人都不喜欢但你自己觉得很酷的解密，我们到时候再好好聊聊吧。</p>
          <p>祝韬綋瀹夊悍</p>
          <p style={{textAlign: 'right'}}>废弃邮筒敬上</p>
          <p style={{textAlign: 'right'}}>（此处缺失）</p>
        </Modal>

        <Modal title="&nbsp;" visible={modalVisible} onOk={handleOk} onCancel={handleOk}>
          <p>亲爱的孩子：昨天整理你的信，又有些感想。</p>
          <p>关于莫扎特的话，例如说他天真、可爱、清新等等，似乎很多人懂得；但弹起来还是没有那天真、可爱、清新的味儿。这道理，我觉得是“理性认识”
            与“感情深入”的分别。感性认识固然是初步印象，是大概的认识；理性认识是深入一步，了解到本质。但是艺术的领会，还不能以此为限。必须再深入
            进去，把理性所认识的，用心灵去体会，才能使原作者的悲欢喜怒化为你自己的悲欢喜怒，使原作者每一根神经的震颤都在你的神经上引起反响。否则即
            使道理说了一大堆，仍然是隔了一层。一般艺术家的偏于intellectual[理智]，偏于cold[冷静]，就因为他们停留在理性认识的阶段上。</p>
          <p>比如你自己，过去你未尝不知道莫扎特的特色，但你对他并没发生真正的共鸣；感之不深，自然爱之不切了；爱之不切，弹出来当然也不够味儿；
            而越是不够味儿，越是引不起你兴趣。如此循环下去，你对一个作家当然无从深入。</p>
          <p>这一回可不然，你的确和莫扎特起了共鸣，你的脉搏跟他的脉搏一致了，你的心跳和他的同一节奏了；你活在他的身上，他也活在你身上；
            你自己与他的共同点被你找出来了，抓住了，所以你才会这样欣赏他，理解他。</p>
          <p>由此得到一个结论：艺术不但不能限于感性认识，还不能限于理性认识，必须要进行第三步的感情深入。换言之，艺术家最需要的，除了理智以外，
            还有一个“爱”字！所谓赤子之心，不但指纯洁无邪，指清新，而且还指爱！法文里有句话叫做“伟大的心”，意思就是“爱”，这“伟大的心”几个字，
            真有意义。而且这个爱决不是庸俗的，婆，婆妈妈的感情，而是热烈的、真诚的、洁卧的、高尚的、如火如荼的、忘我的爱。</p>
          <p>从这个理论出发，许多人弹不好东西的原因都可以明白了。光有理性而没有感情，固然不能表达音乐：有了一般的感情而不是那种火热的同时又是
            高尚、精练的感情，还是要流于庸俗；所谓sentimental滥情，伤感]，我觉得就是指的这种庸俗的感情。</p>
          <p>一切伟大的艺术家（不论是作曲家，是文学家，是画家……）必然兼有独特的个性与普遍的人间性。我们只要能发掘自己心中的人间性，
            就找到了与艺术家沟通的桥梁。再若能细心揣摩，把他独特的个性也体味出来，那就能把一件艺术品整个儿了解了。——当然不可能和原作者的理解与感受完全一样，
            了解的多少、深浅、广狭，还是大有出入；而我们自己的个性也在中间发生不小的作用。</p>
          <p>大多数从事艺术的人，缺少真诚。因为不够真诚，一切都在嘴里随便说说，当作唬人的幌子，装自己的门面，实际只是拾人牙慧，并非真有所感。
            所以他们对作家决不能深入体会，先是对自己就没有深入分析过。这个意思，克利斯朵夫（在第二册内）也好像说过的。</p>
          <p>真诚是第一把艺术的钥匙。知之为知之，不知为不知。真诚的“不懂”，比不真诚的“懂”，还叫人好受些。最可厌的莫如自以为是，自作解人。
            有了真诚，才会有虚心，有了虚心，才肯丢开自己去了解别人，也才能放下虚伪的自尊心去了解自己。建筑在了解自己了解别人上面的爱，才不是盲目的爱。</p>
          <p>而真诚是需要长时期从小培养的。社会上，家庭里，太多的教训使我们不敢真诚，真诚是需要很大的勇气作后盾的。所以做艺术家先要学做人。
            艺术家一定要比别人更真诚，更敏感，更虚心，更勇敢，更坚忍，总而言之，要比任何人都lessimperfect[较少不完美之处]！</p>
          <p>好像世界上公认有个现象：一个音乐家（指演奏家）大多只能限于演奏某几个作曲家的作品。其实这种人只能称为演奏家而不是艺术家。
            因为他们的胸襟不够宽广，容受不了广大的艺术天地，接受不了变化无穷的形与色。假如一个人永远能开垦自己心中的园地，了解任何艺术品都不应该有问题的。</p>
          <p>有件小事要和你谈谈。你写信封为什么老是这么不neat[干净]？日常琐事要做的neat[干净]，等于弹琴要讲究干净是一样的。
            我始终认为做人的作风应当是一致的，否则就是不调和；而从事艺术的人应当最恨不调和。我这回附上一小方纸，还比你用的信封小一些，
            照样能写得很宽绰。你能不能注意一下呢？以此类推，一切小事养成这种neat[干净]的习惯，对你的艺术无形中也有好处。
            因为无论如何细小不足道的事，都反映出一个人的意识与性情。修改小习惯，就等于修改自己的意识与性情。所谓学习，不一定限于书本或是某种技术；
            否则随时随地都该学习这句话，又怎么讲呢？我想你每次接到我的信，连寄书谱的大包，总该有个印象，觉得我的字都写得整整齐齐、清楚明白吧！</p>
        </Modal>
      </header>
    </div>
  );
}

export default App;
