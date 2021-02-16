<?php

namespace Main\Service;

use Error;
use Exception;

/**
 * Define error display options for the current application
 */

class ErrorReporting {

    /**
     * All types of error levels to define the PHP errorReporting option
     */
    private array $_errorsActive = [
        'E_ERROR'               => [E_ERROR, false],
        'E_WARNING'             => [E_WARNING, false],
        'E_PARSE'               => [E_PARSE, false],
        'E_NOTICE'              => [E_NOTICE, false],
        'E_CORE_ERROR'          => [E_CORE_ERROR, false],
        'E_CORE_WARNING'        => [E_CORE_WARNING, false],
        'E_COMPILE_ERROR'       => [E_COMPILE_ERROR, false],
        'E_COMPILE_WARNING'     => [E_COMPILE_WARNING, false],
        'E_USER_ERROR'          => [E_USER_ERROR, false],
        'E_USER_WARNING'        => [E_USER_WARNING, false],
        'E_USER_NOTICE'         => [E_USER_NOTICE, false],
        'E_STRICT'              => [E_STRICT, false],
        'E_RECOVERABLE_ERROR'   => [E_RECOVERABLE_ERROR, false],
        'E_DEPRECATED'          => [E_DEPRECATED, false],
        'E_USER_DEPRECATED'     => [E_USER_DEPRECATED, false],
        'E_ALL'                 => [E_ALL, true ],
    ];

    const ALL_ERRORS = ['E_ALL'];

    /**
     * Error reporting code depending of options define
     */
    private int $_code;


    public function __construct()
    {
        $this->_code = $this->defineErrorCode();
    }

    /**
     * Calculate the error code depending of error reporting options
     *
     * @return integer
     */
    private final function defineErrorCode() :int
    {
        $code = [];
        foreach($this->_errorsActive as $error) {
            $error[1] === true && $code[] = $error[0];
        }
        return array_sum($code);
    }


    /**
     * Get the error levels which allow PHP displaying messages
     *
     * @return string
     */
    public function getErrorsActive() :string
    {
        $list = '';
        foreach ($this->_errorsActive as $key => $value) {
            $bool = $value[1] === true ? 'true' : 'false';
            $list .= $key . " => " . $bool . '<br />';
        }
        return $list;
    }

    public function setErrorsActive(array $errors, bool $active = true) :mixed
    {
        var_dump($active);
        $catchErrors = [];
        foreach ($errors as $error) {
            $error = strtoupper(strtoupper($error));
            if (in_array($error, array_keys($this->_errorsActive))) {
                $this->toggleErrors($error, $active);
            } else {
                $catchErrors[] = $error;
            }
        }
        try
        {
            if (count($catchErrors) != 0) {
                $errors = implode(", ", $catchErrors);
                throw new Exception("ERROR: Invalid options => $errors <br />");
            } else {
                return 'SUCCES: Error reporting options have been update ! <br />';
            }
        }
        catch(Exception $e)
        {
            return $e->getMessage();
        }
    }

    private function toggleErrors(string $error, $active)
    {
        $index = array_search($error,array_keys($this->_errorsActive));
        return $this->_errorsActive[$error][1] = $active;
    }

    /**
     * Define the error levels which allow PHP displaying messages
     * The value must be either E_ALL or one or more following options
     *
     * @param array $params [E_ALL || E_USER_ERROR, E_USER_NOTICE, E_USER_WARNING]
     */
    public function setErrorReporting (int $code) :void
    {
        $this->_code = $this->defineErrorCode();
    }
}