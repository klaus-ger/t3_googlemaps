<?php

namespace T3developer\Googlefun\Domain\Repository;

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
class ItemRepository extends \TYPO3\CMS\Extbase\Persistence\Repository {

    /**
     * Find item By PLZ and storage PID
     * 
     * @param string $plz The region type
     * @param int $storagePid The storage Pid
     */
    public function countItemsByPLZ($plz, $storagePid) {
        $query = $this->createQuery();
        $query->getQuerySettings()->setRespectStoragePage(FALSE);
        $query->getQuerySettings()->setRespectSysLanguage(FALSE);
        $query->matching(
            //$query->logicalAnd(
             //   $query->equals('pid', $storagePid),
                $query->like('gfunPlz', $plz . '%')
           // )
        );
        return $query->execute()->count();
    
    }
    
        /**
     * Find item By PLZ and storage PID
     * 
     * @param string $plz The region type
     * @param int $storagePid The storage Pid
     */
    public function findItemsByPLZ($plz, $storagePid) {
        $query = $this->createQuery();
        $query->getQuerySettings()->setRespectStoragePage(FALSE);
        $query->getQuerySettings()->setRespectSysLanguage(FALSE);
        $query->matching(
            //$query->logicalAnd(
             //   $query->equals('pid', $storagePid),
                $query->like('gfunPlz', $plz . '%')
           // )
        );
        return $query->execute();
    
    }

}

?>