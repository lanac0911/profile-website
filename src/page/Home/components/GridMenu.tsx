import { Text, Grid } from "@radix-ui/themes";
import WindowSection from "@component/WindowSection";

const GridMenu = () => {
  const menunItem = [
    { title: "AB", fullName: "ABOUT.ME", name: "ABOUT" },
    { title: "TE", fullName: "TECHs.STACK", name: "TECHs" },
    { title: "PJ", fullName: "MY.PROJECTs", name: "PROJECTs" },
    { title: "CT", fullName: "CONTACT.ME", name: "CONTACT" },
  ];

  return (
    <>
      <Grid
        columns={{ initial: "1", xs: "2", sm: "4", lg: "4" }}
        gap="4"
        width="5"
        style={{
          justifySelf: "flex-end",
          bottom: 0,
          position: "relative",
        }}
      >
        {menunItem.map((menu, idx) => (
          <div key={idx} className="grid-menu-item">
            {/* 背景 overlay：只覆蓋 header 以下的區域 */}
            <div className="overlay"></div>
            <WindowSection style={{ backgroundColor: "transparent" }}>
              <div className="default-text">
                <Text
                  as="div"
                  size={{ initial: "6", xs: "8" }}
                  align="center"
                  weight="bold"
                  style={{ color: "#FFF" }}
                >
                  {menu.title}
                </Text>
                <Text
                  as="div"
                  size="1"
                  style={{ fontSize: ".6em", color: "#FFF" }}
                >
                  {menu.fullName}
                </Text>
              </div>
              <div className="hover-text">
                <Text
                  size={{ initial: "4", xs: "6" }}
                  weight="bold"
                  style={{ color: "#000" }}
                >
                  {menu.name}
                </Text>
              </div>
            </WindowSection>
          </div>
        ))}
      </Grid>

      {/* CSS 調整：達成 hover 效果 */}
      <style>
        {`
          .grid-menu-item {
            position: relative;
            overflow: hidden;
            transition: all 0.3s ease-out;
          }
          .grid-menu-item .overlay {
            position: absolute;
            top: 12px; /* 從 header 底下開始 */
            left: 50%;
            width: 0;
            height: 0;
            background: #f5f5f5;
            border-radius: 50%;
            transform: translateX(-50%);
            transition: width 0.3s ease-out, height 0.3s ease-out;
            z-index: 0;
          }
          .grid-menu-item:hover .overlay {
            width: 200%;
            height: 200%;
          }
          .grid-menu-item .default-text {
            z-index: 1;
            transition: opacity 0.3s ease-out;
          }
          .grid-menu-item .hover-text {
            display: none;
            z-index: 1;
            transition: opacity 0.3s ease-out;
          }
          .grid-menu-item:hover .default-text {
            display: none;
          }
          .grid-menu-item:hover .hover-text {
            display: block;
            color: #000;
          }
        `}
      </style>
    </>
  );
};

export default GridMenu;
