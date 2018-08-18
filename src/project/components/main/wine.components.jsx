import * as React from 'react';

import "./wine.scss";

export class Wine extends React.Component {
    render () {
        return  <section className="wine-content">
                <div className="wine-content__header">Wine of Burgundy
                    <div className="wine-content__header-text">☉ Hover for more info</div>
                </div>
                <div className="wine-content__image">
                    <img src="https://www.boissetcollection.com/images/cached/images/remote/http_s3.amazonaws.com/boissetfamilyestates-assets/images/bottle-shots/Chablis-Premier-Cru-Montmains-NV-update_175_639.png"
                         alt={"wine"} className={"bottle"}/>
                    <img src={"http://www.owltemplates.com/demo/website/korporate/light/images/header-price.png"}
                         alt={"shadow"} className={"shadow"}/>
                    <div className="hover-point__glass">
                        <div className="hover-point__glass-dot"></div>
                        <div className="dropdown__glass">Great Glass
                            <div className="glass-line"></div>
                            <div className="glass-line__h"></div>
                        </div>
                    </div>
                    <div className="hover-point__label">
                        <div className="hover-point__label-dot"></div>
                        <div className="dropdown__label">Cool Label
                            <div className="label-line"></div>
                            <div className="label-line__h"></div>
                        </div>
                    </div>
                    <div className="hover-point__taste">
                        <div className="hover-point__taste-dot"></div>
                        <div className="dropdown__taste">Best Taste
                            <div className="taste-line"></div>
                            <div className="taste-line__h"></div>
                        </div>
                    </div>
                </div>
                <div className="wine-content__description">
                    The grapevines around the town of Chablis make a dry white wine renowned
                    for the purity of its aroma and taste. There are seven officially delineated Grand Cru climats,
                    covering an area of 247 acres , all located on one southwest facing hill overlooking the town of Chablis
                    at elevations between 490–660 feet. All of Chablis' Grand Cru vineyards and Premier Cru vineyards are
                    planted on primarily Kimmeridgean soil which is composed of limestone, clay and fossilized oyster shells.
                </div>
            </section>
    }
}