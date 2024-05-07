import logo from "../src/assets/d1b11d5e4dbae547ac0d651476cec488.png";
import "./App.css";

import imgSS from "../src/assets/bot_brush.png";
import imgSSS from "../src/assets/Bot_Lane_View.png";
import imgSSSS from "../src/assets/Mid_Lane_View.png";
import imgSSSSS from "../src/assets/Top_Lane_View.png";
import imgSSSSSS from "../src/assets/mid_path_2.png";
import imgSSSSSSs from "../src/assets/mid_path_2.png";
import imgSSSSSSss from "../src/assets/maxresdefault (1).jpg";
import imgSSSSSSsss from "../src/assets/Bot_River_View.png";
import { useState } from "react";
function App() {
  const [timkiem, setTimKiem] = useState("");

  return (
    <div className="App">
      <header>
        <img src={logo} width="60" height="60" />
        <h1>Các tướng đi rừng league of legends </h1>

        <div style={{display: "flex", alignItems: "center", gap: 10}}>
  <input placeholder='tim kiem tuong' onChange={(e) => {
    setTimKiem(e.target.value)
  }}  />
    <button onClick={() => {
      window.open("https://www.leagueofgraphs.com/vn/champions/builds/" + timkiem)
    }}>Tim kiem</button>
  </div> 

        <nav>
          <ul>
            <li>
              <a href="#" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a
                href="https://6638509c692e0862c5f68251--fabulous-tartufo-865f0c.netlify.app/"
                class="menu-item"
              >
                Champions
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <h2>
        Bản đồ mới này làm thay đổi toàn bộ vòng rừng của các vị tướng nhưng nó
        đã làm cho các người chơi có cách đi rừng mới và thay đổi cả cuộc diện
        trận đấu mà họ cần phải làm để chiến thắng.
      </h2>
      <img src={imgSS} width="1000" height="500" />
      <h2>
        Như bot lane đã thêm 1 lối đi gank mới cho người đi rừng team xanh để dễ
        đạt hiệu quả rank hơn,nhưng nó cũng tạo ra một lối ra rồng mới cho team
        đỏ.
      </h2>
      <img src={imgSSS} alt="Ảnh minh họa" width="1000" height="500" />

      <img src={imgSSSSSSsss} alt="Ảnh minh họa" width="1000" height="500" />

      <img src={imgSSSS} alt="Ảnh minh họa" width="2000" height="1000" />
      <h2>
        Ở Mid thì tạo thêm 2 góc rank mới cho cả team xanh và đỏ từ đó mà người
        đi rừng dễ dàng băng trụ và đạt hiệu quả gank cao hơn bản đồ cũ.
      </h2>
      <img src={imgSSSSS} alt="Ảnh minh họa" width="2000" height="1000" />
      <h2>
        Còn ở tóp thì đã chặn 1 đường gank cho người đi rừng team xanh, từ đó
        biến cái top dễ thở hơn cho team đỏ.Ngoài ra còn tạo ra 1 bức tường chắn
        ngang khu vực ra hang 3R của team xanh ở khu vực bùa xanh của họ từ đó
        mà lối ra hang 3R của cả 2 team trở nên cân bằng hơn.
      </h2>
      <img src={imgSSSSSS} alt="Ảnh minh họa" />
      <h2>
        Còn ở khu vực bùa xanh của team đỏ đã có 1 bức tường chắn ra hang rồng
        làm cho các cuộc tranh chấp rồng trở nên hấp dẫn hơn cho cả 2 team.
      </h2>
      <img src={imgSSSSSSs} alt="Ảnh minh họa" />

      <h2>
        Trong Liên Minh Huyền Thoại (League of Legends), vai trò của tướng đi
        rừng không chỉ là săn mồi và thu thập nguồn lợi nhuận từ rừng mà còn là
        một nhân vật quan trọng trong việc thiết lập áp đảo và hỗ trợ các đường.
        Đây là một số thông tin chi tiết hơn về tướng đi rừng:
        <p>
          Phong cách chơi và Nhiệm vụ Tướng đi rừng thường có phong cách chơi
          linh hoạt, chú trọng vào việc giao tranh, gank đường và hỗ trợ đồng
          đội trong các cuộc giao tranh lớn. Trong giai đoạn đầu của trò chơi,
          nhiệm vụ của tướng đi rừng là bảo vệ khu rừng của đội, săn mồi, hỗ trợ
          các đường và tạo áp lực cho đối thủ thông qua các cuộc gank.
        </p>
        <p>
          Lịch trình rừng (Jungle Path) Lịch trình rừng là chuỗi các quái vật
          rừng mà tướng đi rừng sẽ đi qua để săn mồi. Các lịch trình này thường
          được tinh chỉnh để tối ưu hóa việc thu thập kinh nghiệm và vàng, cũng
          như tăng cường sức mạnh khi gank các đường.
        </p>
        <p>
          Tướng phổ biến đi rừng Trong số nhiều tướng có thể đi rừng, một số
          tướng phổ biến bao gồm Lee Sin, Elise, Vi, Jarvan IV, Kha'Zix, Gragas
          và Nunu. Mỗi tướng đều có những ưu điểm riêng và phong cách chơi đặc
          trưng.
        </p>
        <p>
          Trang bị và kỹ năng Tướng đi rừng thường xây dựng các trang bị để tăng
          cường sức mạnh và sức bền, nhưng cũng phải cân nhắc đến việc xây dựng
          đối với tình huống cụ thể của trận đấu. Các kỹ năng của tướng đi rừng
          thường hỗ trợ vào việc săn mồi, gank và tạo áp lực trên bản đồ.
        </p>
        <p>
          Chính sách gank và tác động toàn diện Gank là việc tướng đi rừng bất
          ngờ xuất hiện ở một đường khác để hỗ trợ đồng đội trong việc tiêu diệt
          đối thủ. Ngoài việc gank, tướng đi rừng cũng có thể tham gia vào các
          cuộc đấu đỉnh cao và tranh đoạt vị trí quan trọng trên bản đồ như Rồng
          và Baron Nashor.
        </p>
        <p>
          Thách thức và trách nhiệm Tướng đi rừng thường phải đối mặt với nhiều
          thách thức như bị đồng đội kìm hãm trong rừng đối thủ, giữa quái vật
          rừng và đối mặt với áp lực gank từ phía đối thủ. Họ cũng phải có khả
          năng quản lý thời gian và quyết định đúng đắn trong việc lựa chọn
          đường để gank.
        </p>
        <p>
          Tóm lại, vai trò của tướng đi rừng không chỉ là săn mồi và thu thập
          nguồn lợi nhuận từ rừng mà còn là một nhân vật chiến lược quan trọng
          trong việc xây dựng áp đảo và hỗ trợ cho đội. Đối với người chơi, việc
          hiểu rõ vai trò và nhiệm vụ của tướng đi rừng là chìa khóa để thành
          công trong Liên Minh Huyền Thoại.
        </p>
      </h2>
      <h3>
        <p>Hotline:0458236112</p>
        <p>cày thuê all rank</p>
        <img src={imgSSSSSSss} alt="photo on rank" />
      </h3>

      <footer>
        <li>
          <a
            href="https://6638509c692e0862c5f68251--fabulous-tartufo-865f0c.netlify.app/"
            class="menu-item"
          >
            Next page
          </a>
        </li>
      </footer>
    </div>
  );
}

export default App;
