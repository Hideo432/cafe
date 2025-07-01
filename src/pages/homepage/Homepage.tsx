import { useEffect, useState } from "react";
import ProductCard from "../../components/product_card/ProductCard";
import "./homepage.css";
import { getProducts } from "../../features/getProducts";
import { type Product } from "../../types";
import ReviewCard from "../../components/homeReviewCard/ReviewCard";
export default function Home() {
  interface ServiceInfo {
    img: string;
    title: string;
    subtitle: string;
  }

  function ServiceInfo({ img, title, subtitle }: ServiceInfo) {
    return (
      <div
        style={{
          textAlign: "center",
          fontFamily: "Segoe UI",
        }}
        className="service_info__container"
      >
        <div
          style={{
            width: 159,
            height: 159,
            position: "relative",
            margin: "0 auto",
          }}
          className="service_info__img__container"
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
            src={img}
            className="service_info__img"
          />
        </div>
        <p
          style={{
            fontSize: 24,
            letterSpacing: "4%",
            marginBottom: 8,
            fontWeight: 700,
          }}
        >
          {title}
        </p>
        <p style={{ fontSize: 18, letterSpacing: "4%" }}>{subtitle}</p>
      </div>
    );
  }
  const [products, setProducts] = useState<Product[]>([]);
  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadProducts();
  }, []);

  const renderProducts = products.map((item) => {
    return (
      <ProductCard
        title={item.title}
        img={item.img}
        description={item.description}
        orderCount={item.orderCount}
        rating={item.rating}
      ></ProductCard>
    );
  });
  return (
    <section className="home__section">
      <div
        className="home__top-banner__container"
        style={{ backgroundColor: "#F6EBDA" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "158px 135px 0 135px",
          }}
        >
          <span className="coffee_beans_top"></span>
          <span className="coffee_beans_bottom"></span>
          <div style={{ marginTop: 60 }}>
            <h2 className="title">
              Enjoy your <span style={{ color: "orange" }}>coffee</span> before
              your activity
            </h2>
            <h3 className="sub-title">
              Boost your productivity and build your mood with a glass of coffee
              in the morning
            </h3>
            <div style={{ display: "flex", gap: 50 }}>
              <button className="home__top-banner__order_btn">Order now</button>
              <a className="home__top-banner__link" href="#">
                More menu
              </a>
            </div>
          </div>
          <div className="home__top-banner__img__container">
            <img
              className="home__top-banner__img"
              src="/src/assets/image/cappuccino_top_banner.png"
              alt=""
            />
          </div>
        </div>{" "}
        <div
          style={{
            position: "relative",
            fontFamily: "inherit",
            padding: "0 137px",
            marginBottom: 32,
            marginTop: 78,
          }}
        >
          <p style={{ fontSize: 32, fontWeight: 700 }}>
            Popular{" "}
            <span style={{ position: "relative" }}>
              Now
              <span
                className="underline-orange "
                style={{
                  position: "absolute",
                  width: "100%",
                  height: 4,
                  backgroundColor: "orange",
                  bottom: 0,
                  left: 0,
                  borderRadius: 25,
                }}
              ></span>
            </span>
          </p>
        </div>
        <div className="popular_cofe__container">
          <ProductCard
            title="Vanilla Latte"
            img="/src/assets/image/vanilla_latte.png"
            orderCount={21}
            category={{ first: "Hot", second: "cold" }}
            rating={4.8}
          ></ProductCard>
          <ProductCard
            title="Vanilla Latte"
            img="/src/assets/image/espresso.png"
            orderCount={21}
            category={{ first: "Hot", second: "cold" }}
            rating={4.8}
          ></ProductCard>
          <ProductCard
            title="Vanilla Latte"
            img="/src/assets/image/hazelnut_latte.png"
            orderCount={21}
            category={{ first: "Hot", second: "cold" }}
            rating={4.8}
          ></ProductCard>
        </div>
      </div>
      <h2
        style={{
          fontSize: 32,
          fontWeight: 600,
          padding: "0 135px",
          marginBottom: 44,
        }}
      >
        How to use delivery{" "}
        <span style={{ position: "relative" }}>
          service
          <span
            className="underline-orange "
            style={{
              position: "absolute",
              width: "100%",
              height: 4,
              backgroundColor: "orange",
              bottom: 0,
              left: 0,
              borderRadius: 25,
            }}
          ></span>
        </span>
      </h2>
      <div
        style={{
          display: "flex",
          gap: 130,
          padding: "0 135px",
          marginBottom: 133,
          justifyContent: "center",
        }}
      >
        <ServiceInfo
          img="/src/assets/image/coffee-cup.png"
          title="choose your coffee"
          subtitle="there are 20+ coffees for you"
        ></ServiceInfo>
        <ServiceInfo
          img="/src/assets/image/food-truck.png"
          title="we delivery it to you"
          subtitle="Choose delivery service"
        ></ServiceInfo>
        <ServiceInfo
          img="/src/assets/image/coffee-cup_2.png"
          title="Enjoy your coffee"
          subtitle="Choose delivery service"
        ></ServiceInfo>
      </div>
      <div className="home__about__container">
        <div className="home__about__img__container">
          <img
            src="/src/assets/image/coffee-leaf.png"
            alt=""
            className="home__about__"
          />
        </div>
        <div className="home__about__text">
          <h2 style={{ fontSize: 32, fontWeight: 700, marginBottom: 24 }}>
            About{" "}
            <span style={{ position: "relative" }}>
              us
              <span
                className="underline-orange "
                style={{
                  position: "absolute",
                  width: "100%",
                  height: 4,
                  backgroundColor: "orange",
                  bottom: 0,
                  left: 0,
                  borderRadius: 25,
                }}
              ></span>
            </span>{" "}
          </h2>
          <h3
            style={{
              fontSize: 24,

              fontWeight: 600,
              marginBottom: 15,
            }}
          >
            We provide quality coffee,
            <br /> and ready to deliver.
          </h3>
          <h4 style={{ fontSize: 18, color: "#a6a6a6" }}>
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </h4>{" "}
          <button
            className="home__about__btn"
            style={{ color: "#F4AE26", fontSize: 12 }}
          >
            Get your coffee
          </button>
        </div>
      </div>{" "}
      <p
        style={{
          fontSize: 32,
          fontWeight: 600,
          letterSpacing: 0.4,
          marginBottom: 32,
          paddingLeft: 146,
        }}
      >
        Special menu{" "}
        <span style={{ position: "relative" }}>
          for you
          <span
            className="underline-orange "
            style={{
              position: "absolute",
              width: "100%",
              height: 4,
              backgroundColor: "orange",
              bottom: 0,
              left: 0,
              borderRadius: 25,
            }}
          ></span>
        </span>{" "}
      </p>
      <div className="home__special_menu">{renderProducts}</div>
      <div className="home__reviews__container">
        <div className="home__reviews__text" style={{ width: 945 }}>
          <h2
            style={{
              fontSize: 32,
              letterSpacing: 0.4,
              fontWeight: 600,
              marginBottom: 16,
              paddingTop: 170,
            }}
          >
            What they say about us
          </h2>
          <h3
            style={{
              fontSize: 18,
              color: "gray",
              width: 310,
              lineHeight: 1.54,
            }}
          >
            We always provide the best service and always maintain the quality
            of coffee
          </h3>
        </div>
        <div className="home__reviews__users">
          <ReviewCard
            img="/src/assets/image/naura.png"
            name="Naura"
            review="I really love the cappucino, the coffee was very smooth  "
          ></ReviewCard>
          <ReviewCard
            img="/src/assets/image/john.png"
            name="John"
            review="this coffee shop is very convenient"
          ></ReviewCard>
          <ReviewCard
            img="/src/assets/image/azura.png"
            name="Azura"
            review="the coffee menu here is very much"
          ></ReviewCard>
          <div
            style={{
              display: "flex",
              gap: 8,
              position: "absolute",
              bottom: -18,
              transform: "translate(-50%,50%)",
              left: "50%",
            }}
          >
            <span
              style={{
                height: 8,
                width: 8,
                backgroundColor: "#ff902A",
                borderRadius: "50%",
              }}
            ></span>
            <span
              style={{
                height: 8,
                width: 8,
                backgroundColor: "#F8E9D2",
                borderRadius: "50%",
              }}
            ></span>
            <span
              style={{
                height: 8,
                width: 8,
                backgroundColor: "#F8E9D2",
                borderRadius: "50%",
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}
