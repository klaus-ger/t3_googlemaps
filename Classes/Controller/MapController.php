<?php

namespace T3developer\Googlefun\Controller;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2013 Klaus Heuer | t3-developer.com
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 * ************************************************************* */

/**
 *
 *
 * @package googlefun
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 */
class MapController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

    /**
     * @var \T3developer\Googlefun\Domain\Repository\RegionRepository 
     * @inject  
     */
    protected $regionRepository;

    /**
     * @var \T3developer\Googlefun\Domain\Repository\ItemRepository 
     * @inject  
     */
    protected $itemRepository;

    /**
     * Initializes the current action 
     * @return void 
     */
    public function initializeAction() {
        
    }

    /**
     * Index Action: Shows the map
     */
    public function indexAction() {
        
        $this->writeRegions();
       
    }

    /**
     * Find Marker by Ajax Action
     */
    public function findMarkerByAjaxAction() {
        if ($this->request->hasArgument('storagePid')) {
            $storagePid = $this->request->getArgument('storagePid');
        }
        $oneDigitRegions = $this->regionRepository->findByRegionType(1, $storagePid);
        $twoDigitRegions = $this->regionRepository->findByRegionType(2, $storagePid);

        foreach ($oneDigitRegions as $oneDR) {
            $countOneItems = $this->itemRepository->findItemsByPLZ($oneDR->getRegionPlz(), $storagePid);
            // if ($countOneItems > 0) {
            $marker['mainregions'][$oneDR->getUid()]['plz'] = $oneDR->getRegionPlz();
            $marker['mainregions'][$oneDR->getUid()]['long'] = $oneDR->getRegionLong();
            $marker['mainregions'][$oneDR->getUid()]['lat'] = $oneDR->getRegionLat();
            $marker['mainregions'][$oneDR->getUid()]['items'] = $countOneItems;
            // }
        }

        foreach ($twoDigitRegions as $twoDR) {
            $countTwoItems = $this->itemRepository->findItemsByPLZ($twoDR->getRegionPlz(), $storagePid);
            // TEMORARY DISABLED TO SHOW ALL MARKER ON MAP
            //if ($countTwoItems > 0) {
            $marker['regions'][$twoDR->getUid()]['plz'] = $twoDR->getRegionPlz();
            $marker['regions'][$twoDR->getUid()]['long'] = $twoDR->getRegionLong();
            $marker['regions'][$twoDR->getUid()]['lat'] = $twoDR->getRegionLat();
            $marker['regions'][$twoDR->getUid()]['items'] = $countTwoItems;
            //}
            $countTwoItems = 0;
        }


        return json_encode($marker);
    }

    /*
     * Write regions
     */

    public function writeRegions() {
        // Array: PLZ Region | Type | Lat & long
        $regions = array();
        $regions[] = array('0', 1, 13.619, 51.284);
        $regions[] = array('01', 2, 13.810, 50.930);
        $regions[] = array('02', 2, 14.693, 51.066);
        $regions[] = array('03', 2, 14.483, 51.687);
        $regions[] = array('04', 2, 12.527, 51.161);
        $regions[] = array('06', 2, 11.722, 51.297);
        $regions[] = array('07', 2, 11.463, 50.644);
        $regions[] = array('08', 2, 12.222, 50.418);
        $regions[] = array('09', 2, 13.104, 50.607);

        $regions[] = array('1', 1, 13.342, 53.174);
        $regions[] = array('10', 2, 13.446, 52.631);
        $regions[] = array('12', 2, 1, 1);
        $regions[] = array('13', 2, 1, 1);
        $regions[] = array('14', 2, 12.613, 52.432);
        $regions[] = array('15', 2, 13.746, 52.013);
        $regions[] = array('16', 2, 12.506, 52.967);
        $regions[] = array('17', 2, 13.696, 53.364);
        $regions[] = array('18', 2, 12.741, 54.205);
        $regions[] = array('19', 2, 11.577, 53.213);

        $regions[] = array('2', 1, 10.103, 53.049);
        $regions[] = array('20', 2, 9.902, 53.568);
        $regions[] = array('21', 2, 9.815, 53.318);
        $regions[] = array('22', 2, 10.335, 53.654);
        $regions[] = array('23', 2, 10.601, 53.753);
        $regions[] = array('24', 2, 9.962, 54.089);
        $regions[] = array('25', 2, 9.054, 54.206);
        $regions[] = array('26', 2, 7.520, 53.451);
        $regions[] = array('27', 2, 8.8596, 53.383);
        $regions[] = array('28', 2, 8.629, 53.142);
        $regions[] = array('29', 2, 10.037, 52.755);

        $regions[] = array('3', 1, 9.762, 51.956);
        $regions[] = array('30', 2, 9.750, 52.476);
        $regions[] = array('31', 2, 9.944, 52.083);
        $regions[] = array('32', 2, 8.685, 52.241);
        $regions[] = array('33', 2, 8.439, 51.893);
        $regions[] = array('34', 2, 9.178, 51.069);
        $regions[] = array('35', 2, 8.387, 50.555);
        $regions[] = array('36', 2, 9.553, 50.485);
        $regions[] = array('37', 2, 9.878, 51.724);
        $regions[] = array('38', 2, 10.613, 52.297);
        $regions[] = array('39', 2, 11.645, 52.090);

        $regions[] = array( '4', 1, 7.639, 52.408);
        $regions[] = array('40', 2, 6.844, 51.227);
        $regions[] = array('41', 2, 6.259, 51.156);
        $regions[] = array('42', 2, 7.208, 51.165);
        $regions[] = array('44', 2, 7.459, 51.522);
        $regions[] = array('45', 2, 7.099, 51.578);
        $regions[] = array('46', 2, 6.778, 51.631);
        $regions[] = array('47', 2, 6.219, 51.639);
        $regions[] = array('48', 2, 7.453, 51.962);
        $regions[] = array('49', 2, 8.034, 52.544);
        
        $regions[] = array( '5', 1, 7.097, 50.286);
        $regions[] = array('50', 2, 6.714, 50.895);
        $regions[] = array('51', 2, 7.590, 50.937);
        $regions[] = array('52', 2, 6.360, 50.674);
        $regions[] = array('53', 2, 6.737, 50.474);
        $regions[] = array('54', 2, 6.762, 49.771);
        $regions[] = array('55', 2, 7.384, 49.725);
        $regions[] = array('56', 2, 7.339, 50.152);
        $regions[] = array('57', 2, 8.007, 50.832);
        $regions[] = array('58', 2, 7.634, 51.278);
        $regions[] = array('59', 2, 8.214, 51.394);
        
        $regions[] = array( '6', 1, 7.624, 49.400);
        $regions[] = array('60', 2, 8.594, 50.042);
        $regions[] = array('61', 2, 7.590, 50.937);
        $regions[] = array('63', 2, 9.220, 50.061);
        $regions[] = array('64', 2, 8.868, 49.691);
        $regions[] = array('65', 2, 8.175, 50.214);
        $regions[] = array('66', 2, 7.352, 49.264);
        $regions[] = array('67', 2, 8.199, 49.372);
        $regions[] = array('68', 2, 8.532, 49.411);
        $regions[] = array('69', 2, 9.007, 49.404);
        
        $regions[] = array( '7', 1, 8.255, 47.922);
        $regions[] = array('70', 2, 9.183, 48.650);
        $regions[] = array('71', 2, 9.349, 48.879);
        $regions[] = array('72', 2, 9.096, 48.260);
        $regions[] = array('73', 2, 10.024, 48.855);
        $regions[] = array('74', 2, 9.662, 49.239);
        $regions[] = array('75', 2, 8.683, 48.828);
        $regions[] = array('76', 2, 8.336, 48.869);
        $regions[] = array('77', 2, 7.965, 48.377);
        $regions[] = array('78', 2, 8.726, 47.914);
        $regions[] = array('79', 2, 7.986, 47.707);

        $regions[] = array( '8', 1, 10.067, 48.004);
        
        $regions[] = array( '9', 1, 12.305, 49.404);
        
        
        foreach ($regions as $region) {
            $DBregion = $this->regionRepository->findByRegionPlz($region[0]);
            // \TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($DBregion);
            if ($DBregion[0] != '') {
                $DBregion[0]->setRegionLat($region[2]);
                $DBregion[0]->setRegionLong($region[3]);
                $DBregion[0]->setRegionType($region[1]);
                $DBregion[0]->setPid($this->settings['storagePid']);
                $this->regionRepository->update($DBregion[0]);
                //\TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($DBregion[0], 'DB');
            } else {
                $new = new \T3developer\Googlefun\Domain\Model\Region;
                $new->setPid($this->settings['storagePid']);
                $new->setRegionPlz($region[0]);
                $new->setRegionLat($region[2]);
                $new->setRegionLong($region[3]);
                $new->setRegionType($region[1]);
                //\TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($new);
                $this->regionRepository->add($new);
            }
        }
    }

    

}

?>