<?php

namespace T3developer\Googlefun\Domain\Model;

/* * *************************************************************
 *  Copyright notice
 *
 *  (c) 2013 Klaus Heuer t-developer.com
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
class Region extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {

     /**
     * Region 
     * @var \string
     * 
     */
    protected $regionPlz;
    
    /**
     * Region Type
     * @var \int
     * 
     */
    protected $regionType;

    /**
     * Region Name
     * @var \string
     * 
     */
    protected $regionName;

    /**
     * Region longitude
     * @var \string
     * 
     */
    protected $regionLong;

    /**
     * Region latidude
     * @var \string
     * 
     */
    protected $regionLat;

    public function getRegionPlz() {
        return $this->regionPlz;
    }

    public function setRegionPlz($regionPlz) {
        $this->regionPlz = $regionPlz;
    }

    public function getRegionType() {
        return $this->regionType;
    }

    public function setRegionType($regionType) {
        $this->regionType = $regionType;
    }

    public function getRegionName() {
        return $this->regionName;
    }

    public function setRegionName($regionName) {
        $this->regionName = $regionName;
    }

    public function getRegionLong() {
        return $this->regionLong;
    }

    public function setRegionLong($regionLong) {
        $this->regionLong = $regionLong;
    }

    public function getRegionLat() {
        return $this->regionLat;
    }

    public function setRegionLat($regionLat) {
        $this->regionLat = $regionLat;
    }


}

?>