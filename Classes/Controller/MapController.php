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
     * Initializes the current action 
     * @return void 
     */
    public function initializeAction() {
        
    }

    /**
     * Index Action: Shows the map
     */
    public function indexAction() {
       
    }
    /**
     * Find Marker by Ajax Action
     */
    public function findMarkerByAjaxAction() {
        if($this->request->hasArgument('storagePid')){
            $storagePid = $this->request->getArgument('storagePid');
        }
        $oneDigitRegions = $this->regionRepository->findByRegionType(1, $storagePid);
        $twoDigitRegions = $this->regionRepository->findByRegionType(2, $storagePid);
        
        foreach($oneDigitRegions as $oneDR){
            $marker['mainregions'][$oneDR->getUid()]['plz']  = $oneDR->getRegionPlz();
            $marker['mainregions'][$oneDR->getUid()]['long'] = $oneDR->getRegionLong();
            $marker['mainregions'][$oneDR->getUid()]['lat']  = $oneDR->getRegionLat();
        }
        
        
        return json_encode($marker) ;
    }

}

?>