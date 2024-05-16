import { BannerImg } from "./styles";
import banner from "../../assets/images/img-banner.jpg";
export function Banner() {
  return (
    <BannerImg>
      <img src={banner} alt="" />
    </BannerImg>
  );
}
