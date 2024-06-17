import styles from '../styles/hero.module.css';

export default function hero() {
  return (
    <div className={styles.outline}>
      <div className={styles.heading}>
        <h1>GREAT VIDEOS START WITH A PLAN</h1>
      </div>

      <div className={styles.heading}>
        <h3>Try Veed with our <a href='#self'>Free plan </a></h3>
      </div>

      <div className={styles.cards}>
        <div className={styles.tiles}>
            <h3>Basic</h3>
            <h5>Ideal starter plan</h5>
            <div className={styles.amountCont}><div className={styles.amount} ><span className={styles.Smallrupee}>&#8377;</span><span className={styles.Smallprice}>290.67</span>  </div>
            <div className={styles.discount}>Save 36%</div>
            </div>

            <p>
                Per user/month, billed yearly
            </p>

            <button className={styles.bottMargin}><a href="#pro" > Go Basic </a></button>

            <hr />

            <div className={styles.properties}>
                <div className={styles.listElements}>
                &#10003; Remove watermark
                </div>
                <div className={styles.listElements}>
                &#10003; 12 hr/yr
                </div>
                <div className={styles.listElements}>
                &#10003; No Upload Size Limit
                
                </div>
                <div className={styles.listElements}>
                &#10003; Full HD 1080p Exports
                </div>
            </div>

        </div>
        <div className={styles.tiles}>

            <div className={styles.topElement}>
                <img src='/3_stars.png' height='12px' width='12px' />
                Recommended
            </div>
            <h3>Pro</h3>
            <h5>For pro video creation</h5>
            <div className={styles.amountCont}>
            <div className={styles.amount} ><span className={styles.rupee}>&#8377;</span><span className={styles.price}>599</span>  </div>
            <div className={styles.discount}>Save 21%</div>
             </div>

            <p>
                Per user/month, billed yearly
            </p>
            <div className={styles.special}>
            <button><a href="#pro" > Go Pro </a></button></div>
            <hr />

            <div className={styles.properties}>
                <div className={styles.listElements}>
                &#10003; 24 hr/yr
                </div>
                <div className={styles.listElements}>
                &#10003; Clean Audio
                </div>
                <div className={styles.listElements}>
                &#10003; 
                Eye Contact Correction
                </div>
                <div className={styles.listElements}>
                &#10003; 
                Stock Audio & Video Library
                </div>
                <div className={styles.listElements}>
                &#10003; 
                Download Subtitles
                </div>
            </div>

        </div>
        <div className={styles.tiles}>
            <h3>Businees</h3>
            <h5>For upto 5 people</h5>
            
            <div className={styles.amountCont}><div className={styles.amount} ><span className={styles.rupee}>&#8377;</span><span className={styles.price}>1500</span>  </div>
            <div className={styles.discount}>Save 14%</div>
            </div>

            <p>
                Per user/month, billed yearly
            </p>

            <button><a href="#pro" > Go Business </a></button>
            <span className={styles.trial}> or <a href='#trail'>Request a Trial </a></span>
            <hr />

                  <div className={styles.properties}>
                      <div className={styles.listElements}>
                          &#10003; AI Avatars 4 hr/yr
                      </div>
                      <div className={styles.listElements}>
                          &#10003;
                          Subtitles 134 hr/yr
                      </div>
                      <div className={styles.listElements}>
                          &#10003;
                          Translate to 50+ Languages
                      </div>
                      <div className={styles.listElements}>
                          &#10003;
                          Text to Speech 60 hr/yr
                      </div>
                      <div className={styles.listElements}>
                          &#10003;
                          Customizable Video Templates

                      </div>
                      <div className={styles.listElements}>
                          &#10003; 4k Export Quality
                      </div>
                  </div>

        </div>

        <div className={styles.tiles}>
            <h3>Enterprise</h3>
            <h5>Scale video across your team</h5>
            
            <div className={styles.amount} ><span className={styles.rupee}>Let's Talk</span>
            </div>

            <p>
                Custom Pricing
            </p>

            <button><a href="#pro" > Book a Demo </a></button>
            <span className={styles.trial}> or <a href='#trail'>Request a Trial </a></span>
            <hr />

            <div className={styles.properties}>
                <div className={styles.listElements}>
                &#10003; Personalized AI avatars
                </div>
                <div className={styles.listElements}>
                &#10003; 
Brand assets & templates
                </div>
                <div className={styles.listElements}>
                &#10003; 
Multiple workspaces
                </div>
                <div className={styles.listElements}>
                &#10003; 
Custom usage limits</div>
                <div className={styles.listElements}>
                &#10003; 
Creator training

                
                </div>
                <div className={styles.listElements}>
                &#10003; Account manager
                </div>
            </div>
            
        </div>

      </div>
    </div>
  );
}
