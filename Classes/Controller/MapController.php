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
        //write the static data for developing
        //if all data are complete change this to if DB empty switch
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
            if ($countOneItems > 0) {
                $marker['mainregions'][$oneDR->getUid()]['plz'] = $oneDR->getRegionPlz();
                $marker['mainregions'][$oneDR->getUid()]['long'] = $oneDR->getRegionLong();
                $marker['mainregions'][$oneDR->getUid()]['lat'] = $oneDR->getRegionLat();
                $marker['mainregions'][$oneDR->getUid()]['items'] = $countOneItems;
            }
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

        $regions = array();
        $regions[] = array( '0', 1, 13.619, 51.284);
        $regions[] = array('01', 2, 13.810, 50.930);
        $regions[] = array('02', 2, 14.693, 51.066);
        $regions[] = array('03', 2, 14.483, 51.687);
        $regions[] = array('04', 2, 12.527, 51.161);
        $regions[] = array('06', 2, 11.722, 51.297);
        $regions[] = array('07', 2, 11.357, 50.636);
        $regions[] = array('08', 2, 12.222, 50.418);
        $regions[] = array('09', 2, 13.104, 50.607);
        
        
        foreach ($regions as $region) {
            $DBregion = $this->regionRepository->findByRegionPlz($region[0]);
           // \TYPO3\CMS\Extbase\Utility\DebuggerUtility::var_dump($DBregion);
            if ($DBregion[0] != '') {
                $DBregion[0]->setRegionLat($region[2]);
                $DBregion[0]-> setRegionLong($region[3]);
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