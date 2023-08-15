import {Component} from '@angular/core';
import {ScreenWidthService} from "../../../services/screen-width/screen-width.service";

@Component({
  selector: 'app-who-that-for',
  templateUrl: './who-that-for.component.html',
  styleUrls: ['./who-that-for.component.css']
})
export class WhoThatForComponent
{
  statesOfMind: string[][] = [
    ['ont soif de croissance et d’indépendance', 'veulent prendre un nouveau départ'],
    ['veulent construire l’entreprise de leurs rêves', 'veulent vivrent correctement de leur passion'],
    ['veulent retrouver une sérénité professionnelle', 'sont frustrés de ne pas pouvoir aider autant de monde qu’ils le souhaiteraient'],
    ['veulent gagner en liberté', 'Veulent faire plus de ventes'],
    ['ont besoin de se sentir guidés et soutenus dans le développement de leur activité', 'veulent apporter leur contribution au monde à leur manière'],
    ['Souhaitent une méthode qui a fait ses preuves, à appliquer étape par étape']];

  isLargeScreen: boolean = true;

  constructor(private screenWidthService: ScreenWidthService)
  {
    screenWidthService.isLargeScreen$.subscribe(isLargeScreen =>
    {
      this.isLargeScreen = isLargeScreen;
    });
  }

}
