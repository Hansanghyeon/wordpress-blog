<?php

namespace App\View\Components;

use Roots\Acorn\View\Component;

use function Roots\asset;

class LightHouse extends Component
{
  public $light;
  public $dark;

  public function __construct()
  {
    $this->light = $this->lightHouse();
    $this->dark = $this->lightHouse(false);
  }

  public function render()
  {
    return $this->view('components.lighthouse');
  }

  public function lightHouse($isLight = true)
  {
    return $isLight ? asset('assets/lottie/lf30_editor_f0ce7pjt.json') : asset('assets/lottie/lf30_editor_r9csabuc.json');
  }
}
