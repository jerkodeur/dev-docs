<?php

namespace Main\Service;

class Boot {

    protected string $_errorColor = 'red';
    protected string $_succesColor = 'green';
    protected string $_dumpColor = '#f0f0f0';
    protected string $_dumpBorderColor = '#a3a4a8';
    protected ErrorReporting $_errorReporting;
    protected Formatting $_formatting;
    protected Debug $_debug;

    public function __construct()
    {
        $this->_setErrorReporting();
        $this->_setDebug();
        $this->_setFormatting();
    }

    private function _setDebug() :void
    {
        $this->_debug = Debug::getInstance($this->_dumpColor, $this->_dumpBorderColor);
    }

    private function _setFormatting() :void
    {
        $this->_formatting = Formatting::getInstance($this->_errorColor, $this->_succesColor);
    }

    private function _setErrorReporting() :void
    {
        $this->_errorReporting = ErrorReporting::getInstance();
    }

    public function getErrorReporting() :ErrorReporting
    {
        return $this->_errorReporting;
    }

    public function getFormatting() :Formatting
    {
        return $this->_formatting;
    }

}