import Header from "../components/Header";
import Footer from "../components/Footer";
import FlipCard from "../components/FlipCard";
import "../styles/ourteam.css";
import "../styles/index.css";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Anju Natarajan",
      position: "Co-President",
      bio: "Hello hello! My name is Anju and I'm a 3rd year majoring in MCB and minoring in Data Science. This club has been a passion of mine since freshman year, and I'm so so proud of how far we've come and I love the friends I've made along the way (in the club and also the encampments)! Outside of USMO you'll see me in my lab or making art :)",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Jacob Park",
      position: "Co-President",
      bio: "Hello, my name is Jacob Park and I am a Senior at UC Berkeley majoring in Integrative Biology. USMO is a club I joined on a whim but it has significantly shaped my college experience over the years and I am proud to be able to serve with such a dedicated group of peers. Outside of USMO, my hobbies include art, gaming, and music.",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Steven Zhang",
      position: "Finance Chair",
      bio: "Hey y'all! I'm a fourth-year Rhetoric/Legal Studies major who helps teach our DeCal, Health and the Unhoused. I love backpacking, acquiring new solo hobbies, and all the friends I've made through USMO! I hope that all our new members come to feel the same way :)",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Sanchitha Kannabran",
      position: "External Head",
      bio: "Hi, I'm Sanchitha Kannabran and I am a junior studying Molecular and Cellular Biology with an emphasis on Immunology and Molecular Medicine. For the past 3 semesters I have enjoyed helping the community by arranging partnerships and organizing events with USMO and I look forward to doing more impactful work this semester as part of the external committee!",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Hargun Chhabra",
      position: "External Chair",
      bio: "Hargun Chhabra is one of the Chairs of the External Committee for USMO. He is currently pursuing a Molecular Environmental Biology major and a Nutrition minor. Hargun is dedicated to serving the needs of the various unhoused communities here in the wider East Bay region, striving to make a positive impact on their lives.",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Alinna Villaroman",
      position: "Finance Head",
      bio: "Hey guys, Alinna here, your finance head!! If I’m not handling your precious cargo, I’m off spending undisclosed amounts of my own money on little figures and trinkets that give me emotional support. I’m a junior majoring in MCB, and fun fact, I’ll watch or read anything you recommend me (and I mean anything) so let me know what I can use as an excuse to waste my time on next!",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Grace Isaac",
      position: "Finance Chair",
      bio: "Hello! I am a third year MCB major and love cats, baking, and going on walks. As a finance chair, I focus on grants and development.",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Isabella Lake",
      position: "Advocacy Head",
      bio: "Hey y'all! I'm a fourth-year Rhetoric/Legal Studies major who helps teach our DeCal, Health and the Unhoused. I love backpacking, acquiring new solo hobbies, and all the friends I've made through USMO! I hope that all our new members come to feel the same way :)",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
    {
      name: "Helen Li",
      position: "Advocacy Chair",
      bio: "I'm a pre-med Psych major who loves doing service work and interacting with the community. In my private life I'm a bookworm, movie geek, and occasional gym rat.",
      instagramLink: "https://instagram.com/",
      linkedinLink: "https://linkedin.com/"
    },
  ];

  return (
    <>
      <Header />
      <div className="header-container">
        <h1>Meet the Team</h1>
        <p>
          Our team is composed of UC Berkeley undergraduates of all levels who are passionate about social good 
        </p>
      </div>
      <div className="flip-cards-container">
        {teamMembers.map((member, index) => (
          <FlipCard
            key={index}
            name={member.name}
            position={member.position}
            bio={member.bio}
            instagramLink={member.instagramLink}
            linkedinLink={member.linkedinLink}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
