import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-archivements",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./archivements.component.html",
})
export class ArchivementsComponent {
  Archivements = [
    {
      title: "Desarrollo de Sistema de Ecommerce",
      description:
        "Implementé un sistema de ecommerce utilizando patrones de diseño, arquitectura limpia y buenas prácticas de programación, mejorando la modularidad y escalabilidad del proyecto.",
    },
    {
      title: "Implementación de Autenticación Segura",
      description:
        "Desarrollé un sistema de autenticación basado en JWT con tokens de acceso y actualización, garantizando la seguridad y la eficiencia en el acceso a APIs.",
    },
    {
      title: "Optimización de Gestión de Recursos en Linux",
      description:
        "Migré completamente de GNOME a i3wm, reduciendo el uso de recursos del sistema en un 40% y mejorando significativamente la velocidad y rendimiento en entornos de desarrollo.",
    },
  ];
}
