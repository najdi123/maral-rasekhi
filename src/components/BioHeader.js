import React, {Component} from 'react';
// import Fade from "react-reveal/Fade";
// import Flash from "react-reveal/Flash";
import './BioHeader.css'
import Navbar from "./Navbar";

import one from "../images/bio-music.png";

class BioHeader extends Component {
    render() {
        return (
            <div className="bio-header">

                <Navbar/>

                <div className="text-box">
                    <h1 className="heading-primary">
                        BIO
                    </h1>

                </div>

                <div className="bio-text">
                    <p className="bio-text-1">
                        Growing up near San Diego, two-time Olympic gold medalist Shaun White first tried snowboarding in an attempt to emulate his older brother Jesse, and immediately showed an uncanny talent for the sport. With Shaun instantly hooked, the White family began making the three-hour trek to the San Bernardino Mountains every chance they could. “My mom would put me, my brother, and sister in the car and we’d drive up and ride the mountain all day, or spend the weekend if we were really going to live it up,” he says. “I was introduced to the sport in such a casual way, but it really took hold off me.” Because they couldn’t afford to stay at the nearby resorts — his mom was a waitress, his dad worked for the San Clemente water department — his parents eventually bought a used van so the family could camp out at the base of the mountains overnight. By age seven — the same year he was discovered by Tony Hawk at a local skate park — Shaun had won a series of snowboarding competitions and landed a sponsorship with snowboard manufacturer Burton.
                    </p>
                    <h3 className="bio-text-1">
                        “MY MOM WOULD PUT ME, MY BROTHER, AND SISTER IN THE CAR AND WE’D DRIVE UP AND RIDE THE MOUNTAIN ALL DAY, OR SPEND THE WEEKEND IF WE WERE REALLY GOING TO LIVE IT UP.”
                    </h3>
                    <p className="bio-text-1">
                        With his graceful style and preternatural skill, Shaun turned pro at 13 and, at 16, became the youngest snowboarder ever to win the US Open. Though typically at least a decade junior to his competitors — and often handed a celebratory bottle of sparkling apple cider in place of champagne — Shaun soon emerged as the world’s most decorated rider. In 2003, at 17, he also turned pro in skateboarding and began riding for Tony Hawk’s Birdhouse Skateboards. By the time he’d won his first Olympic gold medal, the then-19-year-old was a household name, matching his intensity on the board with an effortlessly magnetic and sometimes outrageous presence (such as when he turned up on the cover of Rolling Stone in Axl Rose-inspired American-flag-print pants).
                    </p>
                    <p className="bio-text-1">
                        As he continued to triumph in snowboarding and skateboarding — with his accolades now including gold medals at the 2006 and 2010 Olympics (he’s the only athlete ever to win gold at both the Winter and Summer X Games), 11 ESPY awards for Best Male Action Sports Athlete and Best Male US Olympic Athlete, a record-breaking 15 gold medals at the X Games (he is the only rider in the history of the sport to earn a perfect 100 score in SuperPipe), and multiple Dew Tour wins — Shaun steadily built up the business side of his career. “It started with being offered a promo snowboard from Burton and designing that with my older brother, and from there it was this very organic process of getting involved with other companies that felt right to me,” he recalls. Several years after joining forces with Burton (whose White Collection has featured snowboards, boots, helmets, and clothing with Led Zeppelin-referencing names like “Jacket of the Gods” and “The Most Unholy Jacket Ever”), he signed a deal to create signature products for eyewear brand Oakley and — at 14 — partnered with Target on a youth-clothing line that ultimately expanded into footwear, accessories, and home goods.
                    </p>

                    <div className="bio-images">
                        <img className="bio-image-1" src={one} alt=""/>
                    </div>

                    <p className="bio-text-1">
                        In the meantime, Shaun also founded Shaun White Enterprises (a company helmed by his mother Cathy until several years ago) and continued his practice of working closely with organizations like St. Jude Children’s Research Hospital, the Boys & Girls Club, and Target House to raise and donate money for those in need. Born with a heart defect that demanded he undergo two major surgeries before his first birthday, Shaun is also closely involved with the Make-A-Wish Foundation and has granted 17 wishes since 2008.
                    </p>

                    <p className="bio-text-1">
                        The Make-A-Wish Foundation factored into a defining moment at the 2014 Olympics, in which Shaun defied protocol by jumping over a barricade to high-five and hug two kids with cancer who’d traveled the 6,000 miles to Sochi to see their idol. That meeting was chronicled in detail in the Washington Post, with the story’s author noting that Shaun achieved “the Olympic moment of his life on the day he failed to win a medal.” Despite placing fourth in the halfpipe, Shaun found the 2014 Olympics revelatory in more ways than one. “You’d think losing would be the end of things, but it was just the beginning,” he says. “Instead of letting it destroy me, I sat back and asked myself, ‘What do I really want to do now?’ And that’s when everything started happening with Air + Style.”
                    </p>

                    <p className="bio-text-1">
                        “WHAT DO I REALLY WANT TO DO NOW?’ AND THAT’S WHEN EVERYTHING STARTED HAPPENING WITH AIR + STYLE
                    </p>

                    <p className="bio-text-1">
                        Shaun’s passions for music have always run deep. He put out a record for Warner Bros. and toured the world with his former band Bad Things. And in 2014 Shaun became the majority shareholder in the snowboarding/music festival Air + Style, an event that began in 1994 as the world’s first Big Air snowboarding contest and has since evolved into a three-stop global sports and music festival with dates in Austria, Beijing, and L.A. With the most recent event featuring a 16-story jump constructed at L.A.’s Exposition Park, the newly revamped Air + Style aims to support up-and-coming snowboarders by providing them with more accessible competitions and better prize money. “Bringing Air + Style to the U.S. for the first time was the perfect chance to breathe new life into the sport,” notes Shaun, who’s involved in every element of the festival, from poster design to parking logistics to selecting the lineup of artists and athletes. He hopes that Air + Style will draw new fans to snowboarding as well.
                    </p>
                </div>
            </div>
        );
    }
}

export default BioHeader;
