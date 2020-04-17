import React from "react";
import bakers from "./bakers.png";

function HomeContent() {
  return (
    <div>
      <div style={styles.bakers}>
        <div style={styles.bakerstext}>
          <h3>Meet the Bakers</h3>
          <p>
            Gwendolyn Rogers has had a passion for baking and cooking her entire
            life. Born in New Orleans, Louisiana in 1965 she had a tough
            childhood. Coming from a torn family, loss of her brother and a
            dysfunctional family, she was forced to raise herself. She put
            herself though school waiting tables and having multiple restaurant
            jobs including, bartender, prep cook, scone girl and dishwashing.
            Her peaceful place, where she found happiness, was in the kitchen.
            She met her husband in 1990 in Los Angeles where she was working as
            a male modeling agent, even though she was always cooking for family
            and friends. She was married in 1995, moved back to Sun Valley,
            Idaho, (where she lived from the age of 6-18), and had three boys.
            They decided to move Indianapolis after the passing of her
            Father-in-Law, and the horrible event of 911. She was in her late
            40's when they started over, moving to a new city with three little
            boys she didn't know anyone, didn't want to make new friends and
            that is when she decided to bake full time. After baking out of
            their rental house for over eight years she knew it was time to find
            a place to bake, she had outgrown her tiny kitchen. She found an old
            house on Carrollton Avenue around the corner from where they lived.
            The owner the building agreed to let her turn it into a bakery.
            Three years later, after designing, remodeling and building, she
            opened her first Cake Bake Shop. She started with herself and one
            employee. It was a huge success from the day the doors opened. Her
            first shop was so busy and she had to turn customers away due to the
            small size of the cottage. The kitchen had 300 square feet and could
            only seat 30. Five years later she decided it was time to open a
            second location so she could accommodate more customers. Her bakery
            was also exploding in popularity from Oprah to Williams-Sonoma.
            Gwendolyn spent two years designing the second location which now
            seats over 150, has a 2,000 square foot production kitchen and a
            full service restaurant with bar. It is located in Carmel, Indiana.
          </p>
        </div>
        <img
          src={bakers}
          alt="The Bakers"
          width="400"
          style={styles.bakersimage}
        />
      </div>
      {/*<Container>
        <Row>
          <Col>
            <div style={styles.bakerstext}>
              <h3>Meet the Bakers</h3>
              <p>Blah blah blah</p>
            </div>
          </Col>
          <Col>
            <img src={bakers} alt="The Bakers" width="400" />
          </Col>
        </Row>
      </Container>*/}
    </div>
  );
}

export default HomeContent;

let styles = {
  bakers: {
    position: "relative"
  },
  bakerstext: {
    position: "relative",
    width: "46%",
    textAlign: "left",
    margin: "2%",
    display: "inline-block",
    float: "left"
  },
  bakersimage: {
    width: "50%",
    display: "inline-block",
    float: "right"
  }
};
