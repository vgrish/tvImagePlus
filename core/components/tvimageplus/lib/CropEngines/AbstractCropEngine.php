<?php
/**
 * Copyright 2013 by Alan Pich <alan.pich@gmail.com>
 *
 * This file is part of tvImagePlus
 *
 * tvImagePlus is free software; you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation; either version 2 of the License, or (at your option) any later
 * version.
 *
 * tvImagePlus is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * tvImagePlus; if not, write to the Free Software Foundation, Inc., 59 Temple Place,
 * Suite 330, Boston, MA 02111-1307 USA
 *
 * @package tvImagePlus
 * @author Alan Pich <alan.pich@gmail.com>
 * @copyright Alan Pich 2013
 */

namespace tvImagePlus\CropEngines;


abstract class AbstractCropEngine
{

    /**
     * @var \modX
     */
    protected $modx;

    public function __construct(\modX $modx)
    {
        $this->modx = $modx;

        echo '<pre>Loaded CropEngine</pre>';
    }


    /**
     * Checks that all requirements are met for using
     * this engine
     *
     * @return bool True if engine is usable
     */
    abstract public function engineRequirementsMet();


    /**
     * Parse image+ data and return a url for the cropped
     * version of the image
     *
     * @param $json
     * @param array $opts
     * @param \modTemplateVar $tv
     * @return string
     */
    abstract public function getImageUrl($json, $opts = array(), \modTemplateVar $tv);

}
