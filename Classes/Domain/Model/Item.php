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
class Item extends \TYPO3\CMS\Extbase\DomainObject\AbstractEntity {

    /**
     * PLZ
     * @var \string
     * 
     */
    protected $gfunPlz;

    /**
     * Title
     * @var \string
     * 
     */
    protected $gfunTitle;

    /**
     * Text
     * @var \string
     * 
     */
    protected $gfunText;

    /**
     * Field 1
     * @var \int
     * 
     */
    protected $gfunField1;

    /**
     * Field 2
     * @var \int
     * 
     */
    protected $gfunField2;

    /**
     * Field 3
     * @var \int
     * 
     */
    protected $gfunField3;

    public function getGfunPlz() {
        return $this->gfunPlz;
    }

    public function setGfunPlz($gfunPlz) {
        $this->gfunPlz = $gfunPlz;
    }

    public function getGfunTitle() {
        return $this->gfunTitle;
    }

    public function setGfunTitle($gfunTitle) {
        $this->gfunTitle = $gfunTitle;
    }

    public function getGfunText() {
        return $this->gfunText;
    }

    public function setGfunText($gfunText) {
        $this->gfunText = $gfunText;
    }

    public function getGfunField1() {
        return $this->gfunField1;
    }

    public function setGfunField1($gfunField1) {
        $this->gfunField1 = $gfunField1;
    }

    public function getGfunField2() {
        return $this->gfunField2;
    }

    public function setGfunField2($gfunField2) {
        $this->gfunField2 = $gfunField2;
    }

    public function getGfunField3() {
        return $this->gfunField3;
    }

    public function setGfunField3($gfunField3) {
        $this->gfunField3 = $gfunField3;
    }

}

?>